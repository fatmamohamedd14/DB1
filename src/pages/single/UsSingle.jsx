import React, { useCallback, useEffect, useState } from "react";
import "./UsSingle.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../api/usersApis";

import UserInfo from "./single-user/UserInfo";
import UserWishList from "./single-user/UserWishList";
import EditUserModal from "./single-user/EditUser";
const UsSingle = () => {
  const { userId: id } = useParams();
  const [user, setUser] = useState();
  const [apiStatus, setApiStatus] = useState("idle");
  const getUser = useCallback(() => {
    getSingleUser({ id, setUser, setApiStatus });
  }, [id]);
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [id, user, getUser]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {apiStatus === "loading"
          ? "loading...."
          : apiStatus === "failed"
          ? "Error happened"
          : apiStatus === "success" && (
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-semibold">User Data</h1>
                  <EditUserModal user={user} getUser={getUser} />
                </div>
                <UserInfo getUser={getUser} user={user} />

                <UserWishList user={user} />
              </div>
            )}
      </div>
    </div>
  );
};
export default UsSingle;

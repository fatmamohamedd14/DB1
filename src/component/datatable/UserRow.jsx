import React, { useEffect, useState } from "react";
import ReactModal from "../ReactModal";
import { deleteUser } from "../../api/usersApis";
import { Link } from "react-router-dom";

const UserRow = ({ user, last, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteFormStatus, setDeleteFormStatus] = useState("idle");
  const handleDeleteLang = async () => {
    await deleteUser({ setFormStatus: setDeleteFormStatus, id: user._id });
  };
  useEffect(() => {
    if (deleteFormStatus === "success") {
      setIsOpen(false);
      onDelete();
    }
  }, [deleteFormStatus, onDelete]);
  return (
    <div
      key={user._id}
      className={`grid grid-cols-6 border-black line-clamp-1 break-all  border-r border-b border-l group ${
        last && "rounded-b-md"
      }`}
    >
      <div className="border-r border-black line-clamp-1 break-all p-2  px-2 flex items-center group-hover:bg-gray-200 duration-150">
        {user._id}
      </div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center group-hover:bg-gray-200 duration-150">
        {user?.name}
      </div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center group-hover:bg-gray-200 duration-150">
        {user?.email}
      </div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center group-hover:bg-gray-200 duration-150">
        {user?.age}
      </div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center group-hover:bg-gray-200 duration-150">
        {user?.status}
      </div>
      <div className="border-r border-black line-clamp-1 break-all  p-2 flex gap-2 items-center justify-center flex-col md:flex-row  group-hover:bg-gray-200 duration-150">
        <Link
          to={`/users/${user._id}`}
          className="px-3 p-1 border rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-150 "
        >
          view
        </Link>
        {/* <button className="px-3 p-1 border">edit</button> */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-3 p-1 border rounded border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-150  "
        >
          Delete
        </button>
      </div>
      <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
        <div className="space-y-8 max-w-[500px]">
          {" "}
          <h3>are you sure you want to delete {user?.name}</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDeleteLang}
              className="px-4 py-1.5 bg-red-500 text-white rounded-md"
            >
              {deleteFormStatus === "loading" ? "loading ..." : "confirm"}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-1.5 bg-gray-300 text-black rounded-md"
            >
              cancel
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default UserRow;

import { useEffect, useState } from "react";
import { deleteFromWishList } from "../../../api/usersApis";

const UserWishList = ({ user, getUser }) => {
  console.log(user);
  const [apiStatus, setApiStatus] = useState("idle");
  useEffect(() => {
    if (apiStatus === "success") {
      getUser();
    }
  }, [apiStatus]);
  const handleDelete = (bookId) => {
    deleteFromWishList({ setApiStatus, userId: user._id, bookId });
  };
  return (
    <div className="border p-3 space-y-4">
      <h2 className="text-xl font-semibold">{user?.name}'s Wishlist</h2>
      {user?.wishlist.length > 0 ? (
        user?.wishlist?.map((item) => {
          return (
            <div
              className="flex relative gap-3 items-start border bg-white drop-shadow rounded overflow-hidden"
              key={item._id}
            >
              <img className="w-32 border" src={item.imgCover} alt="" />
              <div className=" py-5 ">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="bookDiscrepyion">{item.description}</p>
              </div>
              <button
                onClick={() => {
                  handleDelete(item._id);
                }}
                className="absolute bottom-2 right-3 text-red-500"
              >
                {" "}
                delete
              </button>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center min-h-[200px]">
          no items
        </div>
      )}
    </div>
  );
};
export default UserWishList;

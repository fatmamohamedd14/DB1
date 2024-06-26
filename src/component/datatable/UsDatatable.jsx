import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/usersApis";
import UserRow from "./UserRow";
import AddUserForm from "../forms/AddUserForm";
import ReactModal from "../ReactModal";

const UsDatatable = () => {
  const [allUsers, setUsers] = useState();
  const [formStatus, setFormStatus] = useState();
  const [serverError, setServerError] = useState();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const fetchUsers = () => {
    getAllUsers({ setUsers, setFormStatus, setServerError, page, keyword });
  };
  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div className="flex flex-col py-2 px-1">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl my-3 font-bold"> All users</h1>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              className="w-[200px] h-fit px-3 py-1 border-b-2 border-black focus:outline-none"
              placeholder="search users"
            />
            <button
              onClick={fetchUsers}
              className="px-3 py-1 border-2 border-green-400 text-green-400 rounded"
            >
              search
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="px-3 py-1.5 border border-slate-900 text-slate-900  hover:text-white hover:bg-slate-900 duration-150 rounded"
        >
          Add user
        </button>
      </div>
      <div className="grid grid-cols-6 border-black line-clamp-1 break-all border font-bold rounded-t-md">
        <div className="border-r border-black line-clamp-1 break-all p-2">
          id
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2">
          Name
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2">
          Email
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2">
          age
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2">
          status
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2">
          Actions
        </div>
      </div>
      {formStatus === "loading" ? (
        <>
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
          <TableSkeleton />
        </>
      ) : formStatus === "success" ? (
        allUsers?.users.length > 0 ? (
          allUsers.users.map((user, index) => {
            const last = index === allUsers.users.length - 1;
            return (
              <UserRow
                last={last}
                user={user}
                key={user?._id}
                onDelete={fetchUsers}
              />
            );
          })
        ) : (
          <div className="min-h-[500px] w-full border border-black grid place-content-center">
            no Users
          </div>
        )
      ) : (
        <div className="min-h-[500px] w-full border border-black grid place-content-center">
          /error ecoured
        </div>
      )}

      {allUsers && (
        <div className="flex items-center gap-3 my-3">
          <button
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
            disabled={page === 1 || formStatus === "loading"}
            className="border p-2 bg-slate-900 rounded-lg disabled:opacity-70 text-white h-8 w-8 flex items-center justify-center"
          >
            -
          </button>
          <p>{page}</p>
          <button
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
            disabled={allUsers.users.length === 0 || formStatus === "loading"}
            className="border p-2 bg-slate-900 rounded-lg disabled:opacity-70 text-white h-8 w-8 flex items-center justify-center"
          >
            +
          </button>
        </div>
      )}
      <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
        <AddUserForm onSuccess={fetchUsers} setIsOpen={setIsOpen} />
      </ReactModal>
    </div>
  );
};

export default UsDatatable;

const TableSkeleton = () => {
  return (
    <div className="grid grid-cols-6 border-black line-clamp-1 break-all  border-r border-b border-l bg-gray-200 animate-pulse min-h-12">
      <div className="border-r border-black line-clamp-1 break-all p-2  px-2 flex items-center bg-gray-200 animate-pulse min-h-[50px]"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px]"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px]"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px]"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px]"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2 flex gap-2 items-center justify-center flex-col md:flex-row bg-gray-200 animate-pulse min-h-[50px] "></div>
    </div>
  );
};

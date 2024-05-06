// import React, { useState } from "react";
// import "./usdatatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userRows, userColumns } from "../../Usdatatablesource";

// import { Link } from "react-router-dom";

// const Datatable = () => {
//   const [data, setData] = useState(userRows);
//   const handleDalete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Actoin",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDalete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add new user
//         <Link to="/users/Usnew" className="link">
//           Add new{" "}
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowPerPageOption={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };
// export default Datatable;
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/usersApis";

const UsDatatable = () => {
  const [allUsers, setUsers] = useState();
  const [formStatus, setFormStatus] = useState();
  const [serverError, setServerError] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAllUsers = async () => {
      await getAllUsers({ setUsers, setFormStatus, setServerError, page });
    };
    fetchAllUsers();
  }, [page]);

  return (
    <div className="flex flex-col py-2 px-1">
      <h1 className="text-2xl my-3 font-bold"> All Users</h1>
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
                  <button className="px-3 p-1 border rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-150 ">
                    view
                  </button>
                  {/* <button className="px-3 p-1 border">edit</button> */}
                  <button className="px-3 p-1 border rounded border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-150  ">
                    Delete
                  </button>
                </div>
              </div>
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

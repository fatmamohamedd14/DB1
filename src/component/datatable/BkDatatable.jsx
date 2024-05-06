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
import { getAllBooks } from "../../api/booksApi";
import ReactModal from "../ReactModal";
import AddBookForm from "../forms/AddBookForm";

const BkDatatable = () => {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [allBooks, setBooks] = useState();
  const [formStatus, setFormStatus] = useState();
  const [serverError, setServerError] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAllBooks = async () => {
      await getAllBooks({ setBooks, setFormStatus, setServerError, page });
    };
    fetchAllBooks();
  }, [page]);

  return (
    <div className="flex flex-col py-2 px-1">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl my-3 font-bold"> All Books</h1>
        <button
          onClick={() => {
            setIsAddBookOpen(true);
          }}
          className="px-3 py-1.5 border border-slate-900 text-slate-900  hover:text-white hover:bg-slate-900 duration-150 rounded"
        >
          Add Book
        </button>
      </div>
      <div className="grid grid-cols-12 border-black line-clamp-1 break-all border font-bold rounded-t-md">
        <div className="border-r border-black line-clamp-1 break-all p-2 w-full col-span-1 w-22">
          cover
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2 col-span-2">
          Name
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2 col-span-4">
          description
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2 col-span-3">
          id
        </div>
        <div className="border-r border-black line-clamp-1 break-all p-2 col-span-2">
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
        allBooks?.books?.length > 0 ? (
          allBooks.books.map((books, index) => {
            const last = index === allBooks.books?.length - 1;
            return (
              <div
                key={books.id}
                className={`grid grid-cols-12 border-black line-clamp-1 break-all  border-r border-b border-l group hover:bg-gray-200 duration-100 ${
                  last && "rounded-b-md"
                }`}
              >
                <div className="border-r border-black line-clamp-1 min-h-[150px] break-all  p-2 col-span-1  flex items-center group-hover:bg-gray-200 duration-150">
                  <img src={books?.imgCover} alt={books.title} />
                </div>
                <div className="border-r border-black line-clamp-1 break-all  p-2 col-span-2  col flex items-center group-hover:bg-gray-200 duration-150">
                  {books?.title}
                </div>
                <div className="border-r line-clamp-4 border-black   p-2 col-span-4  col flex items-center group-hover:bg-gray-200 duration-150">
                  {books?.description.slice(1, 120)} ...
                </div>
                <div className="border-r border-black line-clamp-1 break-all p-2 w-full  px-2 flex items-center group-hover:bg-gray-200 duration-150 col-span-3">
                  {books.id}
                </div>
                {/* <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center group-hover:bg-gray-200 duration-150">
                  {books?.age}
                </div>
                <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center group-hover:bg-gray-200 duration-150">
                  {books?.status}
                </div> */}
                <div className="border-r border-black line-clamp-1 break-all w-full  p-2 flex gap-2 items-center justify-center flex-col md:flex-row col-span-2  group-hover:bg-gray-200 duration-150">
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
            no books
          </div>
        )
      ) : (
        <div className="min-h-[500px] w-full border border-black grid place-content-center">
          /error ecoured
        </div>
      )}

      {allBooks && (
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
            disabled={allBooks?.books?.length === 0 || formStatus === "loading"}
            className="border p-2 bg-slate-900 rounded-lg disabled:opacity-70 text-white h-8 w-8 flex items-center justify-center"
          >
            +
          </button>
        </div>
      )}
      <ReactModal modalIsOpen={isAddBookOpen} setModalIsOpen={setIsAddBookOpen}>
        <AddBookForm />
      </ReactModal>
    </div>
  );
};

export default BkDatatable;

const TableSkeleton = () => {
  return (
    <div className="grid grid-cols-12 border-black line-clamp-1 break-all  border-r border-b border-l bg-gray-200 animate-pulse min-h-12 ">
      <div className="border-r border-black line-clamp-1 break-all p-2  px-2 flex items-center bg-gray-200 animate-pulse min-h-[150px] col-span-1"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[150px] col-span-2"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[150px] col-span-4"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[150px] col-span-3"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[150px] col-span-2"></div>
    </div>
  );
};

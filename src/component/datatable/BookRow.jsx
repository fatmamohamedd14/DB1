import React, { useEffect, useState } from "react";
import ReactModal from "../ReactModal";
import { deleteBook } from "../../api/booksApi";
import { Link } from "react-router-dom";

const BookRow = ({ books, last, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteFormStatus, setDeleteFormStatus] = useState("idle");
  const handleDeleteBook = async () => {
    await deleteBook({ setFormStatus: setDeleteFormStatus, id: books.id });
  };
  useEffect(() => {
    if (deleteFormStatus === "success") {
      setIsOpen(false);
      onDelete();
    }
  }, [deleteFormStatus, onDelete]);
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

      <div className="border-r border-black line-clamp-1 break-all w-full  p-2 flex gap-2 items-center justify-center flex-col md:flex-row col-span-2  group-hover:bg-gray-200 duration-150">
        <Link
          to={`/books/${books._id}`}
          className="px-3 p-1 border rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-150 "
        >
          view
        </Link>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="px-3 p-1 border rounded border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-150  "
        >
          Delete
        </button>
        <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
          <div className="space-y-8 max-w-[500px]">
            {" "}
            <h3>are you sure you want to delete {books?.name}</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDeleteBook}
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
    </div>
  );
};

export default BookRow;

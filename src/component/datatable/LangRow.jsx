import React, { useEffect, useState } from "react";

import ReactModal from "../ReactModal";
import { deleteLang } from "../../api/langApi";

const LangRow = ({ lang, last, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteFormStatus, setDeleteFormStatus] = useState("idle");
  const handleDeleteLang = async () => {
    await deleteLang({ setFormStatus: setDeleteFormStatus, id: lang._id });
  };
  useEffect(() => {
    if (deleteFormStatus === "success") {
      setIsOpen(false);
      onDelete();
    }
  }, [deleteFormStatus, onDelete]);
  return (
    <div
      key={lang._id}
      className={`grid grid-cols-12 border-black line-clamp-1 break-all  border-r border-b border-l group hover:bg-gray-200 duration-100 ${
        last && "rounded-b-md"
      }`}
    >
      <div className="border-r border-black line-clamp-1 break-all  p-2 col-span-10  col flex items-center group-hover:bg-gray-200 duration-150">
        {lang?.language}
      </div>

      <div className="border-r border-black line-clamp-1 break-all w-full  p-2 flex gap-2 items-center justify-center flex-col md:flex-row col-span-2  group-hover:bg-gray-200 duration-150">
        <button className="px-3 p-1 border rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-150 ">
          view
        </button>
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
            <h3>are you sure you want to delete {lang?.language}</h3>
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
    </div>
  );
};

export default LangRow;

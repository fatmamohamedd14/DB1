import React from "react";
import ReactModal from "react-modal";

const DeleteBook = ({ data, setIsOpen, isOpen }) => {
  return (
    <ReactModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="space-y-8 max-w-[500px]">
        {" "}
        <h3>are you sure you want to delete {data?.name}</h3>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 bg-red-500 text-white rounded-md">
            Confirm
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
  );
};

export default DeleteBook;

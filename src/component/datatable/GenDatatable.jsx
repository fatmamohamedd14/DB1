import React, { useCallback, useEffect, useState } from "react";
import ReactModal from "../ReactModal";
import LangRow from "./LangRow";
import { getLang } from "../../api/langApi";
import AddLangForm from "../forms/AddLangForm";
import { getGenre } from "../../api/genreApis";
import GenreRow from "./GenreRow";
import AddGenreForm from "../forms/AddGenre";

const GenDataTable = () => {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [genres, setGenre] = useState();
  const [formStatus, setFormStatus] = useState();
  const [serverError, setServerError] = useState();
  const [page, setPage] = useState(1);
  const fetchGenre = useCallback(() => {
    getGenre({ setGenre, setFormStatus, setServerError, page });
  }, [page]);
  useEffect(() => {
    fetchGenre();
  }, [page, fetchGenre]);

  return (
    <div className="flex flex-col py-2 px-1">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl my-3 font-bold"> All Genres</h1>
        <button
          onClick={() => {
            setIsAddBookOpen(true);
          }}
          className="px-3 py-1.5 border border-slate-900 text-slate-900  hover:text-white hover:bg-slate-900 duration-150 rounded"
        >
          Add Genre
        </button>
      </div>
      <div className="grid grid-cols-12 border-black line-clamp-1 break-all border font-bold rounded-t-md">
        <div className="border-r border-black line-clamp-1 break-all p-2 col-span-10">
          Genres
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
        genres?.genre?.length > 0 ? (
          genres.genre.map((genre, index) => {
            const last = index === genres.genre?.length - 1;
            return (
              <GenreRow
                genre={genre}
                last={last}
                onDelete={fetchGenre}
                key={genre?._id}
              />
            );
          })
        ) : (
          <div className="min-h-[500px] w-full border border-black grid place-content-center">
            no language
          </div>
        )
      ) : (
        <div className="min-h-[500px] w-full border border-black grid place-content-center">
          /error ecoured
        </div>
      )}

      {genres && (
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
            disabled={genres?.genre?.length === 0 || formStatus === "loading"}
            className="border p-2 bg-slate-900 rounded-lg disabled:opacity-70 text-white h-8 w-8 flex items-center justify-center"
          >
            +
          </button>
        </div>
      )}
      <ReactModal modalIsOpen={isAddBookOpen} setModalIsOpen={setIsAddBookOpen}>
        <AddGenreForm onSuccess={fetchGenre} />
      </ReactModal>
    </div>
  );
};

export default GenDataTable;

const TableSkeleton = () => {
  return (
    <div className="grid grid-cols-12 border-black line-clamp-1 break-all  border-r border-b border-l bg-gray-200 animate-pulse min-h-12 ">
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px] col-span-10"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px] col-span-2"></div>
    </div>
  );
};

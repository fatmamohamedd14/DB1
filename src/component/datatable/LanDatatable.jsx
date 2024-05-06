import React, { useCallback, useEffect, useState } from "react";
import ReactModal from "../ReactModal";
import LangRow from "./LangRow";
import { getLang } from "../../api/langApi";
import AddLangForm from "../forms/AddLangForm";

const LanDataTable = () => {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [languages, setLang] = useState();
  const [formStatus, setFormStatus] = useState();
  const [serverError, setServerError] = useState();
  const [page, setPage] = useState(1);
  const fetchLang = useCallback(() => {
    getLang({ setLang, setFormStatus, setServerError, page });
  }, [page]);
  useEffect(() => {
    fetchLang();
  }, [page, fetchLang]);

  return (
    <div className="flex flex-col py-2 px-1">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl my-3 font-bold"> All Languages</h1>
        <button
          onClick={() => {
            setIsAddBookOpen(true);
          }}
          className="px-3 py-1.5 border border-slate-900 text-slate-900  hover:text-white hover:bg-slate-900 duration-150 rounded"
        >
          Add Lang
        </button>
      </div>
      <div className="grid grid-cols-12 border-black line-clamp-1 break-all border font-bold rounded-t-md">
        <div className="border-r border-black line-clamp-1 break-all p-2 col-span-10">
          Language
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
        languages?.languages?.length > 0 ? (
          languages.languages.map((lang, index) => {
            const last = index === languages.languages?.length - 1;
            return (
              <LangRow
                lang={lang}
                last={last}
                onDelete={fetchLang}
                key={lang?._id}
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

      {languages && (
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
            disabled={
              languages?.languages?.length === 0 || formStatus === "loading"
            }
            className="border p-2 bg-slate-900 rounded-lg disabled:opacity-70 text-white h-8 w-8 flex items-center justify-center"
          >
            +
          </button>
        </div>
      )}
      <ReactModal modalIsOpen={isAddBookOpen} setModalIsOpen={setIsAddBookOpen}>
        <AddLangForm onSuccess={fetchLang} />
      </ReactModal>
    </div>
  );
};

export default LanDataTable;

const TableSkeleton = () => {
  return (
    <div className="grid grid-cols-12 border-black line-clamp-1 break-all  border-r border-b border-l bg-gray-200 animate-pulse min-h-12 ">
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px] col-span-10"></div>
      <div className="border-r border-black line-clamp-1 break-all  p-2  flex items-center bg-gray-200 animate-pulse min-h-[50px] col-span-2"></div>
    </div>
  );
};

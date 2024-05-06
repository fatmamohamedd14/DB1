import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllLang } from "../../api/langApi";
import { getAllGenre } from "../../api/genreApis";
import { getAllAuthors } from "../../api/authorsApis";
import { addBook } from "../../api/booksApi";

const AddBookForm = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [genre, setAllGenre] = useState(null);
  const [lang, setLang] = useState(null);
  const [authors, setAllAuthors] = useState(null);
  const [langStatus, setLangStatus] = useState(null);
  const [authStatus, setAuthStatus] = useState(null);
  const [genreStatus, setGenreStatus] = useState(null);
  const fetchAllLang = async () => {
    getAllLang({ setLang, setFormStatus: setLangStatus });
  };
  const fetchAllGenre = async () => {
    getAllGenre({ setAllGenre, setFormStatus: setGenreStatus });
  };
  const fetchAllAuthors = async () => {
    getAllAuthors({ setAllAuthors, setFormStatus: setAuthStatus });
  };

  useEffect(() => {
    fetchAllLang();
    fetchAllGenre();
    fetchAllAuthors();
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("bookContent", data.bookContent);
    formData.append("imgCover", data.imgCover[0]);
    formData.append("language", data.language);
    formData.append("genre", data.genre);
    formData.append("author", data.author);
    formData.append("description", data.description);
    await addBook({ formData, setFormStatus, setServerError });
  };
  if (formStatus === "success") {
    return (
      <div className="min-h-[250px] text-2xl grid place-content-center">
        Book Added Successfully
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold">Add Book</h3>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-h-[90dvh] overflow-auto"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
              placeholder="Title"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Book Content</label>
            <input
              type="text"
              {...register("bookContent", {
                required: {
                  value: true,
                  message: "bookContent is required",
                },
              })}
              placeholder="book Content"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.bookContent && (
              <p className="text-red-500">{errors.bookContent.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Book cover">Book Cover</label>
            <input
              type="file"
              {...register("imgCover", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            {errors.imgCover && (
              <p className="text-red-500">{errors.imgCover.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Book cover">language</label>
            <select
              {...register("language", {
                required: {
                  value: true,
                  message: "language is required",
                },
              })}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            >
              <option value="">Select language</option>
              {lang &&
                lang.languages.map((lang) => {
                  return <option value={lang._id}>{lang.language}</option>;
                })}
            </select>
            {errors.language && (
              <p className="text-red-500">{errors.language.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Book cover">Genre</label>
            <select
              {...register("genre", {
                required: {
                  value: true,
                  message: "genre is required",
                },
              })}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            >
              <option value="">Select genre</option>
              {genre &&
                genre.genres.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
            </select>
            {errors.genre && (
              <p className="text-red-500">{errors.genre.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Book cover">author</label>
            <select
              {...register("author", {
                required: {
                  value: true,
                  message: "author is required",
                },
              })}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            >
              <option value="">Select author</option>
              {authors &&
                authors.authors.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
            </select>
            {errors.author && (
              <p className="text-red-500">{errors.author.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">description</label>
            <textarea
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
              placeholder="description"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2 min-h-[120px] resize-none"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          {serverError && <p className="text-red-500 ">{serverError?.error}</p>}
          <button
            type="submit"
            className="w-full py-2 text-center bg-slate-900 rounded active:scale-[0.98]  duration-150 text-white"
          >
            {formStatus === "loading" ? "loading.." : "Submit"}
          </button>
        </form>
      </div>
    );
};

export default AddBookForm;

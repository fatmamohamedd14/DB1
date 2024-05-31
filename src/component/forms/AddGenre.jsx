import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { addGenre } from "../../api/genreApis";

const AddGenreForm = ({ onSuccess }) => {
  const [formStatus, setFormStatus] = useState("idle");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEffect(() => {
    if (formStatus === "success") {
      onSuccess();
    }
  }, [formStatus, onSuccess]);
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("img", data.img[0]);
    await addGenre({
      setFormStatus,
      data: { name: data.name, img: data.img[0] },
    });
  };
  if (formStatus === "success") {
    return (
      <div className="min-h-[250px] text-2xl grid place-content-center">
        genre Added Successfully
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold">Add genre</h3>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-h-[90dvh] overflow-auto"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="language">genre</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "genre is required",
                },
              })}
              placeholder="genre name"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.language && (
              <p className="text-red-500">{errors.language.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">image</label>
            <input
              type="file"
              accept="image/*"
              {...register("img", {
                required: {
                  value: true,
                  message: "image is required",
                },
              })}
              placeholder="language name"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.language && (
              <p className="text-red-500">{errors.language.message}</p>
            )}
          </div>

          {formStatus === "failed" && (
            <p className="text-red-500 ">something went wrong</p>
          )}
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

export default AddGenreForm;

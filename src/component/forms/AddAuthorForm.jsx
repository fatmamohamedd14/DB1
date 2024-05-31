import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addAuthor } from "../../api/authorsApis";

const AddAuthorForm = ({ onSuccess }) => {
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
    await addAuthor({
      setFormStatus,
      data: { name: data.name, image: data.image[0], brief: data.brief },
    });
  };
  if (formStatus === "success") {
    return (
      <div className="min-h-[250px] text-2xl grid place-content-center">
        author Added Successfully
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold">Add Author</h3>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-h-[90dvh] overflow-auto"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="language">name</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
              placeholder="author name"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: {
                  value: true,
                  message: "image is required",
                },
              })}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">brief</label>
            <textarea
              type="text"
              {...register("brief", {
                required: {
                  value: true,
                  message: "brief is required",
                },
              })}
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2 h-[120px] resize-none"
            />
            {errors.brief && (
              <p className="text-red-500">{errors.brief.message}</p>
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

export default AddAuthorForm;

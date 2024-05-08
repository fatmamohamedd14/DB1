import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addLanguage } from "../../api/langApi";
import { addUser } from "../../api/usersApis";

const AddUserForm = ({ onSuccess, setIsOpen }) => {
  const [formStatus, setFormStatus] = useState("idle");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  useEffect(() => {
    if (formStatus === "success") {
      onSuccess();
      setIsOpen(false);
    }
  }, [formStatus, onSuccess]);
  const onSubmit = async (data) => {
    await addUser({
      setFormStatus,
      data: { ...data, repassword: data.password },
    });
  };
  if (formStatus === "success") {
    return (
      <div className="min-h-[250px] text-2xl grid place-content-center">
        user Added Successfully
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-xl font-bold">Add user</h3>
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
              placeholder="name"
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="language">name</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
              })}
              placeholder="email "
              className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="language">password</label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                })}
                placeholder="password "
                className="w-full border-2 focus:outline-none focus:border-slate-900 rounded p-2"
              />
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                className="-mx-12 w-10 text-center"
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
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

export default AddUserForm;

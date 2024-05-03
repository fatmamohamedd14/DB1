import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { userLogin } from "./api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [token, setToken] = useState(null);
  const [formStatus, setFormStatus] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };
  console.log(formStatus);
  console.log(serverError);
  console.log(token);
  const onSubmit = async (data) => {
    await userLogin({ setFormStatus, setServerError, setToken, data });
  };

  const onError = (errors, e) => console.log("Form Errors:", errors);

  // In your form submission
  useEffect(() => {
    if (formStatus === "success") {
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, [formStatus, token, navigate]);
  useEffect(() => {
    setErrorMessage("");

    setIncorrectCredentials(false);
    if (serverError?.code === 401) {
      setIncorrectCredentials(true);
    } else if (serverError) {
      setErrorMessage("something went wrong try again");
    }
  }, [serverError]);

  return (
    <div className="container mx-auto h-screen w-screen grid place-content-center">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-4 p-5 border bg-white drop-shadow-md  md:min-w-[400px]"
      >
        <h1 className="text-2xl font-semibold">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
            placeholder="Email"
            className="border-2 focus:border-blue-400 focus:outline-none rounded px-3 py-1 "
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">password</label>
          <div className="flex w-full">
            <input
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
              })}
              placeholder="Password"
              className="border-2 focus:border-blue-400 focus:outline-none rounded px-3 py-1 w-full"
            />
            <button
              onClick={togglePassword}
              type="button"
              className="-mx-14 min-w-12"
            >
              {showPass ? "hide" : "show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        {incorrectCredentials && (
          <p className="text-red-500">incorrect email or password</p>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button className="w-full text-center px-5 py-2 bg-slate-950 focus:outline-none rounded text-white">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;

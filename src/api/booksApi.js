import axios from "axios";
import { axiosAPI, axiosFileUpload } from "./axiosApi";

export const getAllBooks = async ({
  setBooks,
  setFormStatus,
  setServerError,
  page = 1,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get(
      `/api/v1/book?page=${page}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      },
      {}
    );
    if (response.status === 200) {
      setBooks(response.data);
      setFormStatus("success");
    } else {
      setFormStatus("failed");
      setServerError("error");
    }
    return response;
  } catch (e) {
    setFormStatus("failed");
    setServerError(e.response);
    // console.log(e);
  }
};

export const addBook = async ({ formData, setFormStatus, setServerError }) => {
  try {
    setFormStatus("loading");
    setServerError(null);
    const response = await axios.post(
      "https://bookify-new.onrender.com/api/v1/book",
      formData,
      {
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    return response.data;
  } catch (e) {
    setFormStatus("failed");
    setServerError(e.response.data);
    console.log(e);
  }
};

export const deleteBook = async ({ setFormStatus, setServerError, id }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.delete(`/api/v1/book/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
  } catch (e) {
    setFormStatus("failed");
    console.log(e);
  }
};

export const getSingleBook = async ({ setApiStatus, id, setBookData }) => {
  try {
    setApiStatus("loading");
    const response = await axiosAPI.get(`/api/v1/book/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setApiStatus("success");
      setBookData(response.data.book);
    }
    return response.data;
  } catch (error) {
    setApiStatus("failed");
  }
};

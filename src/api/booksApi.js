import axios from "axios";
import { axiosAPI } from "./axiosApi";

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

export const editBook = async ({ setFormStatus, setServerError, data, id }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.put(`/api/v1/book/${id}`, data, {
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    return response;
  } catch (e) {
    setFormStatus("failed");
    setServerError(e.response);
  }
};

export const getBooksForGenre = async ({
  setApiStatus,
  setBooks,
  id,
  page = 1,
}) => {
  try {
    setApiStatus("loading");
    const response = await axiosAPI.get(
      `/api/v1/genre/${id}/book?page=${page}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setApiStatus("success");
    setBooks(response.data);
    return response.data;
  } catch {
    setApiStatus("failed");
  }
};
export const getBooksForLanguage = async ({
  setApiStatus,
  setBooks,
  id,
  page = 1,
}) => {
  try {
    setApiStatus("loading");
    const response = await axiosAPI.get(
      `api/v1/language/${id}/book?page=${page}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setApiStatus("success");
    setBooks(response.data);
    return response.data;
  } catch {
    setApiStatus("failed");
  }
};

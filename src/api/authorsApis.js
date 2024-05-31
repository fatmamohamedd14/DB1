import { axiosAPI, axiosFileUpload } from "./axiosApi";

export const getAuthors = async ({ setAuthors, setFormStatus, page = 1 }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get(`/api/v1/author?page=${page}`);
    if (response.status === 200 || response.status === 201) {
      setAuthors(response.data);
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const getAllAuthors = async ({ setAllAuthors, setFormStatus }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get("/api/v1/author/selectAuthor");
    if (response.status === 200 || response.status === 201) {
      setAllAuthors(response.data);
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const addAuthor = async ({ setFormStatus, data }) => {
  try {
    setFormStatus("loading");
    const response = await axiosFileUpload.post("/api/v1/author", data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const deleteAuthor = async ({ setFormStatus, id }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.delete(`/api/v1/author/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const getSingleAuthor = async ({ setApiStatus, setAuthor, id }) => {
  try {
    setApiStatus("loading");
    const response = await axiosAPI.get(`/api/v1/author/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setAuthor(response.data.author);
      setApiStatus("success");
    } else {
      setApiStatus("failed");
    }
  } catch (e) {
    setApiStatus("failed");
  }
};

export const editAuthor = async ({
  setFormStatus,
  setServerError,
  data,
  id,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.put(`/api/v1/author/${id}`, data, {
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

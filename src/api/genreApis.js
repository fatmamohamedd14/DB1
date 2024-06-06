import { axiosAPI, axiosFileUpload } from "./axiosApi";

export const getGenre = async ({ setGenre, setFormStatus, page }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get(`/api/v1/genre?page=${page}`);
    if (response.status === 200 || response.status === 201) {
      setGenre(response.data);
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const getAllGenre = async ({ setAllGenre, setFormStatus }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get("/api/v1/genre/selectGenre");
    if (response.status === 200 || response.status === 201) {
      setAllGenre(response.data);
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const addGenre = async ({ setFormStatus, data }) => {
  try {
    setFormStatus("loading");
    const response = await axiosFileUpload.post("/api/v1/genre", data, {
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
export const deleteGenre = async ({ setFormStatus, id }) => {
  const token = localStorage.getItem("token");
  try {
    setFormStatus("loading");
    const response = await axiosAPI.delete(`/api/v1/genre/${id}`, {
      headers: {
        token,
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

export const updateGenre = async ({ setFormStatus, data, id }) => {
  try {
    setFormStatus("loading");
    const response = await axiosFileUpload.put(`/api/v1/genre/${id}`, data, {
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

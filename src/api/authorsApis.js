import { axiosAPI } from "./axiosApi";

export const getAuthors = async ({ setAuthors, setFormStatus }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get("/api/v1/author");
    if (response.status === 200 || response.status === 201) {
      setAuthors(response.data);
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

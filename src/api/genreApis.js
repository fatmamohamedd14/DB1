import { axiosAPI } from "./axiosApi";

export const getGenre = async ({ setGenre, setFormStatus }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get("/api/v1/genre");
    if (response.status === 200 || response.status === 201) {
      setGenre(response.data);
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

import { axiosAPI } from "./axiosApi";

export const getLang = async ({
  setLang,
  setServerError,
  setFormStatus,
  page = 1,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get(`/api/v1/language?page=${page}`);
    if (response.status === 200 || response.status === 201) {
      setLang(response.data);
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};
export const getAllLang = async ({ setLang, setFormStatus }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get("/api/v1/language/selectLanguage");
    if (response.status === 200) {
      setLang(response.data);
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const addLanguage = async ({ setFormStatus, language }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.post("/api/v1/language", language);
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

export const deleteLang = async ({ setFormStatus, id }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.delete(`/api/v1/language/${id}`, {
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

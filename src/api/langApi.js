import { axiosAPI } from "./axiosApi";

export const getAllLang = async ({
  setLang,
  setServerError,
  setFormStatus,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get("/api/v1/language");
    if (response.status === 200 || response.status === 201) {
      setLang(response.data);
    } else {
      setFormStatus("failed");
    }
  } catch (e) {
    setFormStatus("failed");
  }
};

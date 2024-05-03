import { axiosAPI } from "../../api/axiosApi";

export const userLogin = async ({
  setFormStatus,
  setServerError,
  setToken,
  data,
}) => {
  try {
    setFormStatus("loading");
    setServerError(null);
    const response = await axiosAPI.post("/api/v1/auth/signIn", data);
    if (response.data.message && response.data.message.includes("Success")) {
      setFormStatus("success");
      setServerError(null);
      setToken(response.data.token);
    } else {
      setFormStatus("failed");
      setServerError({ code: 401 });
    }
  } catch (error) {
    setFormStatus("failed");
    setServerError({ code: error.response.status });
    console.log(error);
  }
};

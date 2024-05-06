import { axiosAPI } from "./axiosApi";

export const getAllUsers = async ({
  setUsers,
  setFormStatus,
  setServerError,
  page = 1,
  keyword,
}) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.get(
      `/api/v1/user?page=${page}&keyword=${keyword}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    if (response.status === 200) {
      setUsers(response.data);
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

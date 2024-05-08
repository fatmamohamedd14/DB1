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

export const deleteUser = async ({ setFormStatus, id }) => {
  try {
    setFormStatus("loading");
    const response = await axiosAPI.delete(`/api/v1/user/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    } else {
      setFormStatus("failed");
    }
    return response;
  } catch (e) {
    setFormStatus("failed");
    // console.log(e);
  }
};

export const addUser = async ({ setFormStatus, data }) => {
  try {
    const response = await axiosAPI.post(`/api/v1/user/`, data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    if (response.status === 200 || response.status === 201) {
      setFormStatus("success");
    }
    return response.data;
  } catch (error) {
    setFormStatus("failed");
  }
};

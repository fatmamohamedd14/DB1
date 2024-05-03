// utils/axiosInstance.js
import axios from "axios";
let token = null;
if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
}
// Create an Axios instance
export const axiosAPI = axios.create({
  baseURL: "https://bookify-new.onrender.com", // Set base URL for requests
  headers: {
    token: token, // Set default headers
    "Content-Type": "application/json",
  },
});

export const axiosFileUpload = axios.create({
  baseURL: "https://bookify-new.onrender.com", // Set base URL for requests
  headers: {
    token: token, // Set default headers
    "Content-Type": "amultipart/form-data",
  },
});

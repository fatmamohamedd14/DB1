import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  status: "idle", // idle, loading, failed, success
  error: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
});

import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  newPassword,
  register,
  resetAuth,
  resetPassword,
  verifyEmail,
} from "./auth";

const user = JSON.parse(localStorage.getItem("user")) || null;
const loggedUser = localStorage.getItem("loggedUser") || null;
const token = localStorage.getItem("token") || null;

const initialState = {
  user: user,
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  loggedUser,
  token,
  isVerifyEmail: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.msg) {
        state.loading = "pending";
        state.msg = action.payload.msg;
      }
      state.loading = "succeeded";
      state.user = action.payload.user;
      state.loggedUser = true;
      state.isVerifyEmail = true;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.response.data.msg;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = "failed";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.msg = action.payload;
    });
    builder.addCase(verifyEmail.pending, (state) => {
      state.loading = "pending";
      state.isVerifyEmail = false;
      state.msg = true;
    });
    builder.addCase(verifyEmail.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = "failed";
      state.isVerifyEmail = false;
      state.msg = null;
    });
    builder.addCase(verifyEmail.fulfilled, (state, action) => {
      state.isVerifyEmail = true;
      state.msg = action.payload;
    });
    builder.addCase(resetAuth, () => initialState);
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = "failed";
      state.msg = null;
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(newPassword.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(newPassword.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(newPassword.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
  },
});

export default authSlice.reducer;

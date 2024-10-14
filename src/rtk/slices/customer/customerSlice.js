import { createSlice } from "@reduxjs/toolkit";
import { editUser, getUser, getUsers } from "./customer";

const initialState = {
  users: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = "done";
      state.users = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = "done";
      state.users = action.payload;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(editUser.fulfilled, (state) => {
      state.loading = "succeeded";
      state.msg = "edit successfully";
    });
  },
});

export default customerSlice.reducer;

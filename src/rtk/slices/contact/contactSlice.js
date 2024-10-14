import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "./contact";

const initialState = {
  contacts: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  created: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContacts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getContacts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.contacts = action.payload.contacts;
    });
    builder.addCase(addContact.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
  },
});

export default contactSlice.reducer;

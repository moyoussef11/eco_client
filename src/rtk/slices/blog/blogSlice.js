import { createSlice } from "@reduxjs/toolkit";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  resetBlog,
  updateBlog,
  updateBlogImage,
} from "./blog";

const initialState = {
  blogs: [],
  blog: {},
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  created: false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.blogs = action.payload;
    });
    builder.addCase(resetBlog, () => initialState);
    builder.addCase(addBlog.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
      state.created = false;
    });
    builder.addCase(addBlog.pending, (state) => {
      state.loading = "pending";
      state.created = false;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
      state.created = true;
    });
    builder.addCase(getBlog.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getBlog.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.blog = action.payload.blog;
    });
    builder.addCase(updateBlog.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateBlog.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
    });
    builder.addCase(updateBlog.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(updateBlogImage.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(updateBlogImage.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteBlog.fulfilled, (state) => {
      state.loading = "succeeded";
      state.msg = "deleted";
    });
  },
});

export default blogSlice.reducer;

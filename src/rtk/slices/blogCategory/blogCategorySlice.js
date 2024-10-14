import { createSlice } from "@reduxjs/toolkit";
import {
  addBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  getBlogsCategory,
  resetBlogCategory,
  updateBlogCategory,
} from "./blogCategory";

const initialState = {
  blogsCategory: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  created: false,
};

export const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogsCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getBlogsCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getBlogsCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.blogsCategory = action.payload;
    });
    builder.addCase(addBlogCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
      state.created = false;
    });
    builder.addCase(addBlogCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.msg;
      state.created = true;
    });
    builder.addCase(getBlogCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getBlogCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.msg;
    });
    builder.addCase(updateBlogCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(updateBlogCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.msg;
    });
    builder.addCase(deleteBlogCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteBlogCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.msg;
    });
    builder.addCase(resetBlogCategory, () => initialState);
  },
});

export default blogCategorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  addProductsCategory,
  deleteProductsCategory,
  getProductCategory,
  getProductsCategory,
  resetCatsProd,
} from "./productCategory";

const initialState = {
  productsCategory: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  created: false,
};

export const productsCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProductsCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getProductsCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsCategory = action.payload;
    });
    builder.addCase(addProductsCategory.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addProductsCategory.rejected, (state, action) => {
      state.loading = "failed";
      state.created = false;
      state.error = action.error.message;
    });
    builder.addCase(addProductsCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.created = true;
      state.msg = action.payload;
    });
    builder.addCase(resetCatsProd, () => initialState);
    builder.addCase(getProductCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.status;
      state.productsCategory = action.payload.category;
    });
    builder.addCase(deleteProductsCategory.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
  },
});

export default productsCategorySlice.reducer;

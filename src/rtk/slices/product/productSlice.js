import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  addToWishlist,
  createProduct,
  deleteCart,
  deleteProduct,
  getCart,
  getProduct,
  getProducts,
  getTotalRateProduct,
  rateProduct,
  resetProduct,
} from "./product";

const initialState = {
  products: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  created: false,
  deleted: false,
  cart: null,
  countCart: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = "pending";
      state.error = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
      state.created = true;
    });
    builder.addCase(resetProduct, () => {
      return initialState;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.deleted = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.deleted = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.deleted = true;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(getTotalRateProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getTotalRateProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(rateProduct.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(rateProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(rateProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
    builder.addCase(addToWishlist.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error;
      state.error = "unauthorized";
    });
    builder.addCase(addToWishlist.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload.msg;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.loading = "failed";
    });
    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = "pending";
      state.error = action.error?.message;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.cart = action.payload;
    });
    builder.addCase(getCart.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.cart = action.payload;
      state.countCart = action.payload.cart.length;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteCart.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.deleted = true;
      state.msg = action.payload;
    });
  },
});

export default productSlice.reducer;

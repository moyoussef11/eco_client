import { createSlice } from "@reduxjs/toolkit";
import {
  createCoupon,
  deleteCoupon,
  getCoupon,
  getCoupons,
  resetCoupon,
  updateCoupon,
} from "./coupon";

const initialState = {
  coupons: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  error: null,
  msg: null,
  created: false,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoupons.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getCoupons.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getCoupons.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.coupons = action.payload;
    });
    builder.addCase(getCoupon.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(getCoupon.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.coupons = action.payload;
    });
    builder.addCase(createCoupon.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
      state.created = false;
    });
    builder.addCase(createCoupon.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.created = true;
      state.msg = action.payload;
    });
    builder.addCase(resetCoupon, () => initialState);
    builder.addCase(deleteCoupon.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.created = false;
      state.msg = action.payload;
    });
    builder.addCase(updateCoupon.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
    builder.addCase(updateCoupon.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.msg = action.payload;
    });
  },
});

export default couponSlice.reducer;

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL, COUPONS } from "../../../utils/API";
import axios from "axios";
import { config } from "../../../utils/config";



export const getCoupons = createAsyncThunk("coupon/getCoupons", async () => {
  try {
    const res = await axios.get(`${BASEURL}/${COUPONS}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const createCoupon = createAsyncThunk(
  "coupon/createCoupon",
  async ({ title, expiry, discount }) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${COUPONS}`,
        { name: title, expiry, discount },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateCoupon = createAsyncThunk(
  "coupon/updateCoupon",
  async ({ id, title, expiry, discount }) => {
    try {
      const res = await axios.put(
        `${BASEURL}/${COUPONS}/${id}`,
        { name: title, expiry, discount },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const resetCoupon = createAction("reset-All");

export const getCoupon = createAsyncThunk("coupon/getCoupon", async (id) => {
  try {
    const res = await axios.get(`${BASEURL}/${COUPONS}/${id}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const deleteCoupon = createAsyncThunk(
  "coupon/deleteCoupon",
  async (id) => {
    try {
      const res = await axios.delete(`${BASEURL}/${COUPONS}/${id}`, config);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

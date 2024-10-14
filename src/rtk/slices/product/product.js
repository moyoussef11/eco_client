import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  BASEURL,
  CART,
  PRODUCTS,
  RATE_PRODUCT,
  TOTAL_RATE_PRODUCT,
  WISHLIST,
} from "../../../utils/API";
import axios from "axios";
import { config } from "../../../utils/config";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const res = await axios.get(`${BASEURL}/${PRODUCTS}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  try {
    const res = await axios.get(`${BASEURL}/${PRODUCTS}/${id}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${PRODUCTS}`,
        productData,
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const res = await axios.delete(`${BASEURL}/${PRODUCTS}/${id}`, config);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const resetProduct = createAction("Reset_all");

export const getTotalRateProduct = createAsyncThunk(
  "product/getTotalRateProduct",
  async (id) => {
    try {
      const res = await axios.get(
        `${BASEURL}/${PRODUCTS}/${id}/${TOTAL_RATE_PRODUCT}`
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const rateProduct = createAsyncThunk(
  "product/rateProduct",
  async ({ id, Rating }) => {
    try {
      const res = await axios.put(
        `${BASEURL}/${PRODUCTS}/${id}/${RATE_PRODUCT}`,
        { rate: Rating },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/addToWishlist",
  async (id) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${PRODUCTS}/${WISHLIST}`,
        { productId: id },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const addToCart = createAsyncThunk(
  "product/addToCart",
  async ({ userId, productId, quantity, price }) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${PRODUCTS}/${CART}`,
        { userId, productId, quantity, price },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const getCart = createAsyncThunk("product/getCart", async () => {
  try {
    const res = await axios.get(`${BASEURL}/${PRODUCTS}/${CART}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const deleteCart = createAsyncThunk("product/deleteCart", async (id) => {
  try {
    const res = await axios.delete(`${BASEURL}/${PRODUCTS}/${CART}/${id}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL, PRODUCTS_CATEGORY } from "../../../utils/API";
import axios from "axios";
import { config } from "../../../utils/config";

export const getProductsCategory = createAsyncThunk(
  "product/getProductsCategory",
  async () => {
    try {
      const res = await axios.get(`${BASEURL}/${PRODUCTS_CATEGORY}`);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const addProductsCategory = createAsyncThunk(
  "product/addProductsCategory",
  async (title) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${PRODUCTS_CATEGORY}`,
        { title: title },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const getProductCategory = createAsyncThunk(
  "product/getProductCategory",
  async (id) => {
    try {
      const res = await axios.get(
        `${BASEURL}/${PRODUCTS_CATEGORY}/${id}`,
        config
      );

      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const editProductsCategory = createAsyncThunk(
  "product/editProductsCategory",
  async ({ id, title }) => {
    try {
      const res = await axios.put(
        `${BASEURL}/${PRODUCTS_CATEGORY}/${id}`,
        { title: title },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const deleteProductsCategory = createAsyncThunk(
  "product/deleteProductsCategory",
  async (id) => {
    try {
      const res = await axios.delete(
        `${BASEURL}/${PRODUCTS_CATEGORY}/${id}`,
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const resetCatsProd = createAction("reset-All");

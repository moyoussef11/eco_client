import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL, BLOGS_CATEGORY } from "../../../utils/API";
import axios from "axios";
import { config } from "../../../utils/config";



export const getBlogsCategory = createAsyncThunk(
  "blog/getBlogsCategory",
  async () => {
    try {
      const res = await axios.get(`${BASEURL}/${BLOGS_CATEGORY}`);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const getBlogCategory = createAsyncThunk(
  "blog/getBlogCategory",
  async (id) => {
    try {
      const res = await axios.get(`${BASEURL}/${BLOGS_CATEGORY}/${id}`);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateBlogCategory = createAsyncThunk(
  "blog/updateBlogCategory",
  async ({ id, title }) => {
    try {
      const res = await axios.put(
        `${BASEURL}/${BLOGS_CATEGORY}/${id}`,
        { title },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const deleteBlogCategory = createAsyncThunk(
  "blog/deleteBlogCategory",
  async (id) => {
    try {
      const res = await axios.delete(
        `${BASEURL}/${BLOGS_CATEGORY}/${id}`,
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const addBlogCategory = createAsyncThunk(
  "blog/addBlogCategory",
  async (title) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${BLOGS_CATEGORY}`,
        { title },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const resetBlogCategory = createAction("reset-All");

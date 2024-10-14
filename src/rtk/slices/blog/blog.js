import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL, BLOGS, UPLOAD } from "../../../utils/API";
import axios from "axios";
import { config } from "../../../utils/config";



export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  try {
    const res = await axios.get(`${BASEURL}/${BLOGS}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const getBlog = createAsyncThunk("blog/getBlog", async (id) => {
  try {
    const res = await axios.get(`${BASEURL}/${BLOGS}/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const resetBlog = createAction("reset-All");

export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async ({ title, description, selectedCategory }) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${BLOGS}`,
        {
          title,
          description,
          category: selectedCategory,
        },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, title, description, category }) => {
    try {
      const res = await axios.patch(
        `${BASEURL}/${BLOGS}/${id}`,
        { title, description, category },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateBlogImage = createAsyncThunk(
  "blog/updateBlogImage",
  async ({ id, image }) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.patch(
        `${BASEURL}/${BLOGS}/${id}/${UPLOAD}`,
        formData,
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const deleteBlog = createAsyncThunk("blog/deleteBlog", async (id) => {
  try {
    const res = await axios.delete(`${BASEURL}/${BLOGS}/${id}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
});

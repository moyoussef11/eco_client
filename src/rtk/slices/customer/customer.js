import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL, EDIT, USERS } from "../../../utils/API";
import axios from "axios";
import { config } from "../../../utils/config";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const res = await axios.get(`${BASEURL}/${USERS}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  try {
    const res = await axios.get(`${BASEURL}/${USERS}/${id}`, config);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ id, username, password }) => {
    try {
      const res = await axios.patch(
        `${BASEURL}/${USERS}/${id}/${EDIT}`,
        {
          username,
          password,
        },
        config
      );
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  AUTH,
  BASEURL,
  LOGIN,
  PASSWORD,
  REGISTER,
  RESET_PASSWORD,
  VERIFY,
} from "../../../utils/API";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${BASEURL}/${AUTH}/${REGISTER}`, userData);
      return res.data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${BASEURL}/${AUTH}/${LOGIN}`, userData);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("loggedUser", true);
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async ({ userId, token }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${BASEURL}/${AUTH}/${userId}/${VERIFY}/${token}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetAuth = createAction("reset-All");

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, thunkAPI) => {
    try {
      const res = await axios.post(`${BASEURL}/${PASSWORD}/${RESET_PASSWORD}`, {
        email,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const newPassword = createAsyncThunk(
  "auth/newtPassword",
  async ({ password, userId, token }, thunkAPI) => {
    try {
      const res = await axios.post(
        `${BASEURL}/${PASSWORD}/${RESET_PASSWORD}/${userId}/${token}`,
        {
          password,
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

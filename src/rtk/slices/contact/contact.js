import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL, CONTACTS } from "../../../utils/API";
import axios from "axios";

export const getContacts = createAsyncThunk("contact/getContacts", async () => {
  try {
    const res = await axios.get(`${BASEURL}/${CONTACTS}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, email, phone, message }) => {
    try {
      const res = await axios.post(`${BASEURL}/${CONTACTS}`, {
        name,
        email,
        phone,
        message,
      });
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id) => {
    try {
      const res = await axios.delete(`${BASEURL}/${CONTACTS}/${id}`);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

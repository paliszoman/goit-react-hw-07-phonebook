import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63a44d0e821953d4f2b03f34.mockapi.io';

export const fetchPhonebook = createAsyncThunk(
  'phonebook/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (name, thunkAPI) => {
    try {
      console.log(name);
      const response = await axios.post('/contacts', name);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchContact = createAsyncThunk(
  'phonebook/searchContact',
  async (search, thunkAPI) => {
    try {
      console.log(search);
      const response = await axios.put(`/contacts`, search);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

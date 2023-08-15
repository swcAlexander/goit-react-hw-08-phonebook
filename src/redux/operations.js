import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const dellToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (token, thunkAPI) => {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await instance.get(`/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await instance.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const registerThunk = createAsyncThunk(
  'auth/register',
  async userData => {
    try {
      const { data } = await instance.post('/users/signup', userData);
      setToken(data.token);
      console.log(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return toast.error(error.responce.data);
    }
  }
);
export const loginThunk = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await instance.post('/users/login', userData);
    setToken(data.token);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return toast.error(error.responce.data);
  }
});

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshuser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(token);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return toast.error(error.responce.data);
    }
  }
);
export const logOutUserThunk = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/logout');
      dellToken();
      return data
    } catch (error) {
      console.log(error);
      return toast.error(error.responce.data);
    }
  }
);

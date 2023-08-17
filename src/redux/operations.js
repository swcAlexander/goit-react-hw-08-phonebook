import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const dellToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
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
      const { data } = await axios.post('/users/signup', userData);
      setToken(data.token);
      console.log(data.token);
      return data;
    } catch (error) {
      return toast.error(error.responce.data);
    }
  }
);
export const loginThunk = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    setToken(data.token);
    return data;
  } catch (error) {
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
      const { data } = await axios.get('/users/current');
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
      const { data } = await axios.post('/users/logout');
      dellToken();
      return data;
    } catch (error) {
      return toast.error(error.responce.data);
    }
  }
);

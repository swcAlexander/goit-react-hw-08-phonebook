import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logOutUserThunk,
  refreshUserThunk,
  registerThunk,
} from 'redux/operations';

export const initialState = {
  token: null,
  isLoading: false,
  error: null,
  profile: null,
  isAuth: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
  state.isAuth = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isAuth = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.token = action.payload.token;
        state.profile = action.payload.user;
      })
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.token = action.payload.token;
        state.profile = action.payload.user;
      })
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.profile = action.payload;
      })
      .addCase(refreshUserThunk.pending, handlePending)
      .addCase(refreshUserThunk.rejected, handleRejected)
      .addCase(logOutUserThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = false;
        state.profile = null;
        state.token = null;
      })
      .addCase(logOutUserThunk.pending, handlePending)
      .addCase(logOutUserThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.token = action.payload.token;
        state.profile = action.payload.user;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = true;
        state.profile = action.payload;
      })
      .addCase(logOutUserThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = false;
        state.profile = '';
        state.token = '';
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});
const getActions = type =>
  [registerThunk, loginThunk, refreshUserThunk].map(action => action[type]);

export const authReducer = authSlice.reducer;

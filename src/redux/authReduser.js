import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "redux/initialState";
const { login } = require("servises/authorization");

const loginThunk = createAsyncThunk('users/login', async (body) => {
    return await login(body)
})

const handleFulfilled = (state, action )=> {
    state.isLoading = false;
    state.error = '';
    state.token = action.payload.token;
};

const handlePending = state => {
  state.isLoading = true;

};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, handlePending)
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(loginThunk.rejected, handleRejected)

    }
})

export const authReducer = authSlice.reducer;
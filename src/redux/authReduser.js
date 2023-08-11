import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "servises/authorization";

const authState = {
  token: '',
  isLoading: false,
  error: '',
}

const loginThunk = createAsyncThunk('users/login', async (body) => {
    return await login(body)
})

const handleFulfilled = (state, action )=> {
    state.isLoading = false;
    state.error = null;
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
  initialState: authState,
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, handlePending)
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(loginThunk.rejected, handleRejected)

    }
})

export const authReducer = authSlice.reducer;
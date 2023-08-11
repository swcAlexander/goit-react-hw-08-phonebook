import { createAsyncThunk, createSlice, isAllOf } from "@reduxjs/toolkit";
import { getProfile, login } from "servises/authorization";

const authState = {
  token: '',
  isLoading: false,
  error: '',
  profile: '',
}

const loginThunk = createAsyncThunk('users/login', async (body) => {
    return await login(body)
})
const getProfileThunk = createAsyncThunk('users/login', async () => {
  return await getProfile();
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

const handleFulfilledProfile = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.profile = action.payload;

}


const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    extraReducers: (builder) => {
      builder
        .addCase(loginThunk.fulfilled, handleFulfilled)
        .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
        .addMatcher(isAllOf(loginThunk.pending, getProfileThunk.pending), handlePending)
        .addMatcher(isAllOf(loginThunk.rejected, getProfileThunk.rejected), handleRejected)

          
            
      

    }
})

export const authReducer = authSlice.reducer;
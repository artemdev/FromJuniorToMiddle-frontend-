import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, fetchCurrentUser } from './user-operations.js';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};
const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [logOut.fulfilled](state, action) {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
    },
    [signUp.fulfilled](state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [fetchCurrentUser.pending](state, action) {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;

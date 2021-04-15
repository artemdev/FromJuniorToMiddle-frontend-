import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import {
  registerSuccess,
  loginSuccess,
  registerError,
  loginError,
  logOutError,
} from './auth-actions';

const initialState = {
  name: null,
  email: null,
  avatar: null,
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [authOperations.requestToMongo.fulfilled](state, action) {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.avatar = action.payload.data.avatar;
      state.isLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.avatar = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.avatar = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.avatar = null;
      state.isLoggedIn = false;
      state.isRefreshingCurrentUser = false;
    },
    [registerSuccess]: (state, action) => {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [loginSuccess]: (state, action) => {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.avatar = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    //пока что ничего не делаем со стейтом при ошибке
    [registerError]: (_, action) => action.payload,
    [loginError]: (_, action) => action.payload,
    [logOutError]: (_, action) => action.payload,
  },
});

export default authSlice.reducer;

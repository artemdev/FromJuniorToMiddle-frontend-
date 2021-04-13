import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
// import { TECHNICAL_QA, TESTING_THEORY } from '../questions/question-type';
import {
  registerSuccess,
  loginSuccess,
  logOutSuccess,
  registerError,
  loginError,
  logOutError,
  // googleAuthSuccess,
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
      console.log('payload>>>>>', action.payload);
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.avatar = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.logout.fulfilled](state, action) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.avatar = null;
      state.isLoggedIn = false;
    },

    [registerSuccess]: (state, action) => {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    [loginSuccess]: (state, action) => {
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.token = action.payload.data.token;
      state.avatar = action.payload.data.avatar;
      state.isLoggedIn = true;
    },
    [logOutSuccess]: (state, _) => {
      state.name = null;
      state.email = null;
      state.token = null;
      state.avatar = null;
      state.isLoggedIn = false;
    },
    //пока что ничего не делаем со стейтом при ошибке
    [registerError]: (_, action) => action.payload,
    [loginError]: (_, action) => action.payload,
    [logOutError]: (_, action) => action.payload,
  },
});

export default authSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

// http://localhost:3030 не видаляти, необхідно для проведення тестів
// axios.defaults.baseURL = 'http://localhost:3030';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const responce = await axios.post('/auth/register', credentials);

    dispatch(authActions.registerSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const responce = await axios.post('/auth/login', credentials);

    token.set(responce.data.token);

    dispatch(authActions.loginSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = createAsyncThunk('auth/logout', async token => {
  try {
    // await axios.post('/auth/logout');
    await axios({
      url: '/auth/logout',
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

const requestToMongo = createAsyncThunk(
  'auth/googleAuth',
  async accessToken => {
    try {
      const { data } = await axios({
        url: '/auth/user',
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localstoragedToken = state.user.token;

    if (localstoragedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(localstoragedToken);

    try {
      const { data } = await axios.get('/auth/user');

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const operations = {
  register,
  logIn,
  logOut,
  requestToMongo,
  fetchCurrentUser,
};
export default operations;

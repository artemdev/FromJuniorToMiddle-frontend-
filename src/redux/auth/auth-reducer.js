import { createReducer } from '@reduxjs/toolkit';
// import { TECHNICAL_QA, TESTING_THEORY } from '../questions/question-type';
import {
  registerSuccess,
  loginSuccess,
  logOutSuccess,
  registerError,
  loginError,
  logOutError,
} from './auth-actions';

const initialUserState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: true,
};

const user = createReducer(initialUserState, {
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
    state.isLoggedIn = true;
  },
  [logOutSuccess]: (state, _) => {
    state.name = null;
    state.email = null;
    state.token = null;
    state.isLoggedIn = false;
  },
  // //пока что ничего не делаем со стейтом при ошибке
  [registerError]: (_, action) => action.payload,
  [loginError]: (_, action) => action.payload,
  [logOutError]: (_, action) => action.payload,
});
export default user;

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

// нужен ли здесь password??????
const initialUserState = {
  email: null,
  token: null,
  isLoggedIn: true,
};

// сюда будем записывать свойство user из responce
// в payload будет свойство user и свойство token
const user = createReducer(initialUserState, {
  [registerSuccess]: (_, action) => action.payload,
  [loginSuccess]: (_, action) => action.payload,
  [logOutSuccess]: (state, _) => {
    state.email = null;
    state.isLoggedIn = false;
    state.token = null;
  },
  // //пока что ничего не делаем со стейтом при ошибке
  [registerError]: () => {},
  [loginError]: () => {},
  [logOutError]: () => {},

});

export default user;

import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
// import { TECHNICAL_QA, TESTING_THEORY } from '../questions/question-type';
import * as authActions from './auth-actions';

// нужен ли здесь password??????
const initialUserState = {
  email: null,
  password: null,
};

// сюда будем записывать свойство user из responce
// в payload будет свойство user и свойство token
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, action) => action.payload,
  [authActions.loginSuccess]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, action) => action.payload,
  [authActions.loginError]: (_, action) => action.payload,
});

const tokenReducer = (state = '', action) => state;

export default combineReducers({
  user,
  error,
  // testActive: testActiveReducer,
  token: tokenReducer,
});

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import questionsReducer from './questions/questions-reducer';
import userReducer from './auth/auth-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    user: userReducer,
    tests: questionsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

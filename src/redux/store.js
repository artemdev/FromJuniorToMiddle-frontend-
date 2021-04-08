import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import questionsReducer from './questions/questions-reducer';
import userReducer from './auth/auth-reducer';
import { modalReducer } from './modal/reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'Question',
  storage,
};

const userPersistConfig = {
  key: 'User',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    modalStatus: modalReducer,
    user: persistReducer(userPersistConfig, userReducer),
    tests: persistReducer(persistConfig, questionsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };

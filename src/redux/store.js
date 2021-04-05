import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import questionsReducer from './questions/questions-reducer';
import userReducer from './auth/auth-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tests: questionsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import testReducer from './questions/questions-reducer';
import userReducer from './auth/auth-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tests: testReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

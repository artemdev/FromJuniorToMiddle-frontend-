import { combineReducers } from 'redux';

const emailReducer = (state = '', action) => state;
const tokenReducer = (state = '', action) => state;

export default combineReducers({
  email: emailReducer,
  token: tokenReducer,
});

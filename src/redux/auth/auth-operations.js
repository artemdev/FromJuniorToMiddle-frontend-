import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

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

    // ???????????    проверить когда бек будет отдавать токен
    token.set(responce.data.user.token);

    dispatch(authActions.registerSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const responce = await axios.post('/auth/login', credentials);

    // ???????????    проверить когда бек будет отдавать токен
    token.set(responce.data.user.token);

    dispatch(authActions.loginSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  try {
    dispatch(authActions.logOutRequest());
    //заработает когда будет авторизация
    await axios.post('auth/logout');
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

const operations = {
  register,
  logIn,
  logOut,
};
export default operations;

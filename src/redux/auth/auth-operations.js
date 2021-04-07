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

/*
 * POST @ /auth/register
 * body: { email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 * credentials - это данные пользователя (форма передаёт)
 */
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const responce = await axios.post('/auth/register', credentials);
    // сетим токен на заголовок авторизации(на дефолтное свойство axios (axios.defaults.headers.common.Authorization))
    // чтоб все последующие запросы шли с этим заголовком авторизации
    token.set(responce.data.token);

    //??????????????????????????????????????????????
    // прокидывает responce.data до редюсера. В responce.data лежит обьект со свойствами user и token.
    //  В payload будет свойство user и свойство token
    dispatch(authActions.registerSuccess(responce.data));
    //??????????????????????????????????????????????
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
// credentials - это данные пользователя, форма передаёт
const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const responce = await axios.post('/users/login', credentials);
    // аналогично как и в register
    token.set(responce.data.token);
    // прокидывает responce.data до редюсера. В responce.data лежит обьект со свойствами user и token.
    //  В payload будет свойство user и свойство token
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

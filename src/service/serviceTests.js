import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

export async function getTests(path) {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export async function getResult(path, answers, userToken) {
  token.set(userToken);
  console.log(userToken);
  try {
    const url = `/tests/${path}`;
    console.log(url);
    console.log(answers);
    const response = await axios.post(url, answers);
    console.log(response);
    return response.data;
    // const response = await axios.post(`/tests/${path}`, tests);
    // return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// export const addContact = createAsyncThunk(
//   'phonebook/addContact',
//   async contact => {
//     const response = await axios.post('/contacts', contact);
//     return response.data;
//   },
// );

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

export async function getResult(path, tests) {
  try {
    const response = await axios.post(`/tests/${path}/result`, tests);
    return response.data;
  } catch (error) {
    console.log('error', { error });
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

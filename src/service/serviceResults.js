import axios from 'axios';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export default async function getResults(url, userToken) {
  token.set(userToken);
  try {
    const { data } = await axios.get(`/tests/${url}`);
    return data;
  } catch (error) {
    console.log('error', { error });
  }
}

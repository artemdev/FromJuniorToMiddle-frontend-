import axios from 'axios';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

export default async function getResults(url) {
  try {
    const { data } = await axios.get(`/tests/${url}/result`);
    return data;
  } catch (error) {
    console.log('error', { error });
  }
}

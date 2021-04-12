import axios from 'axios';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

export default async function getTests(path) {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

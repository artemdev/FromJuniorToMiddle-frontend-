import axios from 'axios';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

export default async function getResults(url, userToken) {
  try {
    const response = await axios({
      url: `/tests/${url}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error', { error });
  }
}

import axios from 'axios';

import action from './questions-actions';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

// export const getResult = url => dispatch => {
//   dispatch(action.getResultRequest());

//   axios
//     .get(`/tests/${url}/result`)
//     .then(({ data }) => dispatch(action.getResultSuccess(data)))
//     .catch(error => dispatch(action.getResultError(error.message)));
// };

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const deleteResult = (url, userToken) => dispatch => {
  dispatch(action.deleteResultRequest());
  token.set(userToken);
  axios
    .delete(`/tests/${url}`)
    .then(() => {
      dispatch(action.deleteResultSuccess());
    })
    .catch(error => dispatch(action.deleteResultError(error.message)));
};

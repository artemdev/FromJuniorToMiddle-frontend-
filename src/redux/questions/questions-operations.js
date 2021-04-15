import axios from 'axios';

import action from './questions-actions';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

export const getResult = url => dispatch => {
  dispatch(action.getResultRequest());

  axios
    .get(`/tests/${url}/result`)
    .then(({ data }) => dispatch(action.getResultSuccess(data)))
    .catch(error => dispatch(action.getResultError(error.message)));
};

export const deleteResult = (credentials, url) => dispatch => {
  dispatch(action.deleteResultRequest());

  axios
    .delete(`/tests/${url}/result`, credentials)
    .then(() => {
      dispatch(action.deleteResultSuccess());
    })
    .catch(error => dispatch(action.deleteResultError(error.message)));
};

import axios from 'axios';

import action from './questions-actions';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';


export const getResult = (tests, url) => dispatch => {
  const result = tests;


  dispatch(action.getResultRequest());

  axios
    .post(`/tests/${url}`, result)
    .then(({ data }) => dispatch(action.getResultSuccess(data)))
    .catch(error => dispatch(action.getResultError(error.message)));
};

export const deleteResult = (credentials, url) => dispatch => {
  dispatch(action.deleteResultRequest());

  axios
    .delete(`/tests/${url}`, credentials)
    .then(() => {
      dispatch(action.deleteResultSuccess());
    })
    .catch(error => dispatch(action.deleteResultError(error.message)));
};

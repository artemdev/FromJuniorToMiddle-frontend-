import { combineReducers } from 'redux';
import { TECHNICAL_QA, TESTING_THEORY } from '../questions/question-type';

const emailReducer = (state = '', action) => state;
const tokenReducer = (state = '', action) => state;
const testActiveReducer = (state = '', { type, payload }) => {
  switch (type) {
    case TECHNICAL_QA:
      return 'technical QA';

    case TESTING_THEORY:
      return 'testing theory';

    default:
      return state;
  }
};

export default combineReducers({
  email: emailReducer,
  testActive: testActiveReducer,
  token: tokenReducer,
});

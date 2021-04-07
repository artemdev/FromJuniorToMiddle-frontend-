import { combineReducers } from 'redux';
import {
  TECHNICAL_QA,
  TESTING_THEORY,
  ADD_RESULT,
} from '../questions/question-type';

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
const question = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_RESULT:
      return [payload];
    default:
      return state;
  }
};

export default combineReducers({
  testActive: testActiveReducer,
  question: question,
});

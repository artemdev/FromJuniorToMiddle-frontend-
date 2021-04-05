import { combineReducers } from 'redux';

const emailReducer = (state = '', action) => state;
const tokenReducer = (state = '', action) => state;
const testActiveReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'questions/technicalQA':
      return 'technical QA';

    case 'questions/testingTheory':
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

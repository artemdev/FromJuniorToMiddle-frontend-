import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './questions-actions';

const testActiveReducer = createReducer('', {
  [action.technicalQA]: () => 'technical QA',
  [action.testingTheory]: () => 'testing theory',
});
const question = createReducer([], {
  [action.addResult]: (_, { payload }) => [payload],
});
// const testActiveReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case TECHNICAL_QA:
//       return 'technical QA';

//     case TESTING_THEORY:
//       return 'testing theory';

//     default:
//       return state;
//   }
// };

// const question = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_RESULT:
//       return [payload];
//     default:
//       return state;
//   }
// };

export default combineReducers({
  testActive: testActiveReducer,
  question: question,
});

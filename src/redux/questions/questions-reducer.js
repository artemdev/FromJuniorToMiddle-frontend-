import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './questions-actions';

const initialResultState = [];

const testActiveReducer = createReducer('', {
  [action.technicalQA]: () => 'technical QA',
  [action.testingTheory]: () => 'testing theory',
  [action.removeRusult]: () => '',
});

const question = createReducer([], {

  // [action.addResult]: (state, { payload }) => [payload],
  [action.addResult]: (state, { payload }) => [
    ...state.filter(question => question.questionId !== payload.questionId),

    payload,
  ],
  [action.removeRusult]: () => [],
  [action.getResultSuccess]: (_, { payload }) => payload,
  [action.deleteResultSuccess]: () => initialResultState,
});
const randomTest = createReducer([], {
  [action.getQuestions]: (state, { payload }) => {
    console.log(payload.question);
  },
});

const randomQuestions = createReducer(null, {
  [action.addRandomQuestions]: (_, { payload }) => [...payload],
  [action.removeRusult]: () => null,
});

const index = createReducer(0, {
  [action.addIndex]: (state, { payload }) => state + payload,
  [action.removeRusult]: () => 0,

});

const testIndex = createReducer(null, {
  [action.getQuestions]: (state, { payload }) => payload.questionId,
});

const loading = createReducer(false, {
  [action.getResultRequest]: () => true,
  [action.getResultSuccess]: () => false,
  [action.getResultError]: () => false,
  [action.deleteResultRequest]: () => true,
  [action.deleteResultSuccess]: () => false,
  [action.deleteResultError]: () => false,
});

const error = createReducer(null, {
  [action.getResultError]: (_, { payload }) => payload,
  [action.deleteResultError]: (_, { payload }) => payload,
});

export default combineReducers({
  testActive: testActiveReducer,
  question: question,
  randomQuestions,
  index,
  randomTest,
  testIndex,
  loading,
  error,

});

// ...state.map(question => {
//   if (question.questionId === payload.questionId) {
//     return { ...question, ...payload };
//   }
//   return payload;
// }),

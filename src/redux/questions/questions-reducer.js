import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './questions-actions';

const testActiveReducer = createReducer('', {
  [action.technicalQA]: () => 'technical QA',
  [action.testingTheory]: () => 'testing theory',
});
const question = createReducer([], {
  [action.addResult]: (state, { payload }) => [...state, payload],
  [action.deleteResult]: () => [],
});

export default combineReducers({
  testActive: testActiveReducer,
  question: question,
});

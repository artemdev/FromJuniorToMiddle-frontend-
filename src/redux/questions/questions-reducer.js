import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './questions-actions';

const initialResultState = [];

const testActiveReducer = createReducer('', {
  [action.technicalQA]: () => 'technical QA',
  [action.testingTheory]: () => 'testing theory',
});

const question = createReducer([], {

  [action.addResult]: (_, { payload }) => [payload],
  [action.getResultSuccess]: (_, { payload }) => payload,
  [action.deleteResultSuccess]: () => initialResultState,
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
  loading,
  error,
});

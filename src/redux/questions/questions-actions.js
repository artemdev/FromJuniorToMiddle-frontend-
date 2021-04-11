import { createAction } from '@reduxjs/toolkit';

const technicalQA = createAction('questions/technicalQA');
const testingTheory = createAction('questions/testingTheory');

const addResult = createAction('questions/results', (testId, testValue) => ({
  payload: {
    questionId: testId,
    answers: testValue,
  },
}));

const getResultRequest = createAction('questions/getResultRequest');
const getResultSuccess = createAction('questions/getResultSuccess');
const getResultError = createAction('questions/getResultError');

const deleteResultRequest = createAction('questions/deleteResultRequest');
const deleteResultSuccess = createAction('questions/deleteResultSuccess');
const deleteResultError = createAction('questions/deleteResultError');

const actions = {
  technicalQA,
  testingTheory,
  addResult,
  getResultSuccess,
  getResultRequest,
  getResultError,
  deleteResultRequest,
  deleteResultSuccess,
  deleteResultError,
};
export default actions;

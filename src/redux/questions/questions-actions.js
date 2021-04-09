import { createAction } from '@reduxjs/toolkit';

const technicalQA = createAction('questions/technicalQA');

const testingTheory = createAction('questions/testingTheory');

const deleteResult = createAction('questions/delete');

const addResult = createAction('questions/results', (testId, testValue) => ({
  payload: {
    questionId: testId,
    answers: testValue,
  },
}));

const actions = { technicalQA, testingTheory, addResult, deleteResult };
export default actions;

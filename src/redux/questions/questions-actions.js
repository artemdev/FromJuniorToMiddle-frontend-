import { createAction } from '@reduxjs/toolkit';

const technicalQA = createAction('questions/technicalQA');
const testingTheory = createAction('questions/testingTheory');

const addResult = createAction(
  'questions/results',
  (testId, testValue, question) => ({
    payload: {
      questionId: testId,
      userAnswer: testValue,
      question,
    },
  }),
);

const removeRusult = createAction('questions/removeRusult');

const addRandomQuestions = createAction('questions/addRandomQuestions');

const addIndex = createAction('questions/addIndex');

const getQuestions = createAction('questions/getQuestions');
const testIndex = createAction('questions/testIndex');

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
  getQuestions,
  testIndex,
  addRandomQuestions,
  removeRusult,
  addIndex,
};

export default actions;

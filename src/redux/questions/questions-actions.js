import { TECHNICAL_QA, TESTING_THEORY, ADD_RESULT } from './question-type';
import { createAction } from '@reduxjs/toolkit';

const technicalQA = createAction(TECHNICAL_QA);

const testingTheory = createAction(TESTING_THEORY);

const addResult = createAction(ADD_RESULT, (testId, testValue) => {
  return { questionId: testId, answers: testValue };
});

const actions = { technicalQA, testingTheory, addResult };
export default actions;

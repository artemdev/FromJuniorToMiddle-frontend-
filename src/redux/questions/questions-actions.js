import { TECHNICAL_QA, TESTING_THEORY } from './question-type';

export const technicalQA = value => ({
  type: TECHNICAL_QA,
  payload: value,
});
export const testingTheory = value => ({
  type: TESTING_THEORY,
  payload: value,
});

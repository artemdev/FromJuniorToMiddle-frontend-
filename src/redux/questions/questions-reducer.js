import { combineReducers } from 'redux';

const questionIdReducer = (state = '', action) => state;
const rightAnswerReducer = (state = '', action) => state;

const questionsInitialState = combineReducers({
  questionId: questionIdReducer,
  rightAnswer: rightAnswerReducer,
});

export default combineReducers({
  question: questionsInitialState,
});

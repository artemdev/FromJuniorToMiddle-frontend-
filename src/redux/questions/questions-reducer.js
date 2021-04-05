import { combineReducers } from 'redux';

// const questionIdReducer = (state = '', action) => state;
// const rightAnswerReducer = (state = '', action) => state;

// const questionsInitialState = combineReducers({
//   questionId: questionIdReducer,
//   rightAnswer: rightAnswerReducer,
// });
const question = (state = [], action) => state;

export default combineReducers({
  question: question,
});

const gestTestName = state => state.tests.testActive;
const getUserAnswers = state => state.tests.question;
const getRandomQuestions = state => state.tests.randomQuestions;
const getIndex = state => state.tests.index;
const getToken = state => state.user.token;

export { gestTestName, getUserAnswers, getRandomQuestions, getIndex, getToken };

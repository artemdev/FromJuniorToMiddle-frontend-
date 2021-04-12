const getLoggedIn = state => state.user.isLoggedIn;
const getToken = state => state.user.token;
const getUsername = state => state.user.name;
const getUserAvatar = state => state.user.avatar;

const authSelectors = {
  getLoggedIn,
  getToken,
  getUsername,
  getUserAvatar,
};

export default authSelectors;

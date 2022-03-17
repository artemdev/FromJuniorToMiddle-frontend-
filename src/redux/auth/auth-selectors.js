const getLoggedIn = state => state.user.isLoggedIn;
const getToken = state => state.user.token;
const getUsername = state => state.user.name;
const getUserAvatar = state => state.user.avatar;
const isRefreshingCurrentUser = state => state.user.isRefreshingCurrentUser;

const authSelectors = {
  getLoggedIn,
  getToken,
  getUsername,
  getUserAvatar,
  isRefreshingCurrentUser,
};

export default authSelectors;

const getIsLoggedIn = state => state.user.isLoggedIn;

const getToken = state => state.user.token;

const getUsername = state => state.user.name;

const authSelectors = {
  getIsLoggedIn,
  getToken,
  getUsername,
};

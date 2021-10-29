module.exports = {
  login: require("./auth/login"),
  logout: require("./auth/logout"),
  signup: require("./auth/signup"),
  getAccessToken: require("./auth/kakao").getAccessToken,
  getUserInfo: require("./auth/kakao").getUserInfo,
};

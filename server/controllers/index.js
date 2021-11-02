module.exports = {
  login: require("./auth/login"),
  logout: require("./auth/logout"),
  signup: require("./auth/signup"),
  getAccessToken: require("./auth/kakao").getAccessToken,
  getUserInfo: require("./auth/kakao").getUserInfo,
  search: require("./actor/actor").search,
  recommendation: require("./actor/recommendation"),
  actorDetail: require("./actor/actorDetail"),
  post: require("./noticeBard/post"),
  requestActor: require("./noticeBard/requestActor"),
  favorite: require("./mypage/favorite"),
};

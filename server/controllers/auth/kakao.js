const axios = require("axios");
const { sendAccessToken, sendRefreshToken } = require("./token");
const kakaoClientId = process.env.KAKAO_CLIENT_ID;
const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;

module.exports = {
  getAccessToken: (req, res) => {
    const code = req.body.code;
    const kakaoUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${kakaoClientId}&client_secret=${kakaoClientSecret}&redirect_uri=http://localhost:3000/login&code=${code}`;
    axios
      .post(kakaoUrl, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset-utf-8",
        },
      })
      .then((data) => {
        const accessToken = data.data.access_token;
        const refreshToken = data.data.refresh_token;
        sendAccessToken(res, accessToken);
        sendRefreshToken(res, refreshToken);
      });
  },

  getUserInfo: (req, res) => {
    const authorization = req.headers.accesstoken;
    const profileUrl =
      "https://kapi.kakao.com/v2/user/me?profile=profile_nickname";
    axios
      .get(profileUrl, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset-utf-8",
          Authorization: `Bearer ${authorization}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        const userInfo = {
          nickname: data.data.kakao_account.profile.nickname,
          profileImage: data.data.kakao_account.profile.profile_image_url,
        };
        res.status(201).send({ userInfo });
      });
  },
};

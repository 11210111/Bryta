const axios = require("axios");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("./token");
const { user } = require("../../models");
const kakaoClientId = process.env.KAKAO_CLIENT_ID;
const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;

module.exports = {
  getAccessToken: (req, res) => {
    const code = req.body.code;
    const kakaoUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${kakaoClientId}&client_secret=${kakaoClientSecret}&redirect_uri=https://api.bryta.shop/login&code=${code}`;
    axios
      .post(kakaoUrl, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset-utf-8",
        },
      })
      .then((data) => {
        const profileUrl =
          "https://kapi.kakao.com/v2/user/me?profile=profile_nickname";
        axios
          .get(profileUrl, {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset-utf-8",
              Authorization: `Bearer ${data.data.access_token}`,
            },
          })
          .then(async (data) => {
            console.log(data.data);
            const userInfo = {
              username: data.data.kakao_account.profile.nickname,
            };

            const usernameInfo = await user.findOne({
              where: {
                username: userInfo.username,
              },
            });

            if (!usernameInfo) {
              await user.create({
                email: null,
                username: userInfo.username,
                password: null,
              });
              const accessToken = generateAccessToken(userInfo);
              const refreshToken = generateRefreshToken(userInfo);

              sendRefreshToken(res, refreshToken);
              sendAccessToken(res, accessToken, userInfo);
            } else {
              const accessToken = generateAccessToken(userInfo);
              const refreshToken = generateRefreshToken(userInfo);

              sendRefreshToken(res, refreshToken);
              sendAccessToken(res, accessToken, userInfo);
            }
          });
      });
  },
};

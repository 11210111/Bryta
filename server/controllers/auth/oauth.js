const axios = require("axios");
const kakaoClientId = process.env.KAKAO_CLIENT_ID;
const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;
const kakaoUrl = "https://kauth.kakao.com/oauth/token";

module.exports = async (req, res) => {
  await axios
    .post(
      kakaoUrl,
      {
        grant_type: authorization_code,
        client_id: kakaoClientId,
        client_secret: kakaoClientSecret,
        // redirect_uri: "http://localhost:3000",
        code: req.body.code,
      },
      {
        headers: {
          accept: "application/json",
          withCredentials: true,
        },
      }
    )
    .then((data) => {
      console.log(data);
    });
};

/*
require('dotenv').config();

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');
const githubUrl = 'https://github.com/login/oauth/access_token';

module.exports = async (req, res) => {
  await axios
    .post(
      githubUrl,
      {
        client_id: githubClientId,
        client_secret: githubClientSecret,
        code: req.body.code,
      },
      {
        headers: {
          accept: 'application/json',
          withCredentials: true,
        },
      }
    )
    .then((data) => {
      res.status(200).json({
        accessToken: data.data.access_token,
      });
    })
    .catch(() => {
      res.status(404);
    });
};
 */

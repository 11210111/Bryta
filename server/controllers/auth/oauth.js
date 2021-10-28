const axios = require("axios");
const kakaoClientId = process.env.KAKAO_CLIENT_ID;
const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;
const kakaoUrl = "https://kauth.kakao.com/oauth/token";

module.exports = async (req, res) => {
  // await axios
  //   .post(
  //     kakaoUrl,
  //     {
  //       grant_type: authorization_code,
  //       client_id: kakaoClientId,
  //       client_secret: kakaoClientSecret,
  //       redirect_uri: "http://localhost:3000",
  //       code: req.body.code,
  //     },
  //     {
  //       headers: {
  //         accept: "application/json",
  //         withCredentials: true,
  //       },
  //     }
  //   )
  //   .then((data) => {
  //     console.log(data);
  //   });
  console.log(req.body.code);
};

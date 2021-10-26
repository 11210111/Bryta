const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("./token");

const { user } = require("../../models");
module.exports = (req, res) => {
  const { username, password } = req.body;
  const userInfo = user.findOne({
    where: {
      username,
      password,
    },
  });
  if (!userInfo) {
    res.sendStatus(404);
  } else {
    const data = {
      username: userInfo.dataValue.username,
      email: userInfo.dataValue.email,
    };
    const aceessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    sendAccessToken(res, aceessToken, data);
    sendRefreshToken(res, refreshToken);
  }
};

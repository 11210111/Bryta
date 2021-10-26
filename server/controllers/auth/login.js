const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("./token");

const { user } = require("../../models");
module.exports = (req, res) => {
  const { ID, password } = req.body;
  const userInfo = user.findOne({
    where: {
      ID,
      password,
    },
  });
  if (!userInfo) {
    res.sendStatus(404);
  } else {
    const data = {
      username: userInfo.dataValue.ID,
      email: userInfo.dataValue.email,
    };
    const aceessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    sendAccessToken(res, aceessToken, data);
    sendRefreshToken(res, refreshToken);
  }
};

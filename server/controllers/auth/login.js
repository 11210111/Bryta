const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("./token");

const { user } = require("../../models");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const userInfo = await user.findOne({
    where: {
      email,
      password,
    },
  });
  if (!userInfo) {
    res.sendStatus(404);
  } else {
    const data = {
      id: userInfo.dataValues.id,
      email: userInfo.dataValues.email,
      username: userInfo.dataValues.username,
    };
    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken, data);
  }
};

const { user } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.sendStatus(404);
  }
  const { email, password } = req.body;

  await user
    .update(
      {
        email,
        password,
      },
      {
        where: {
          username: userInfo.username,
        },
      }
    )
    .then(() => {
      res.sendStatus(201);
    });
};

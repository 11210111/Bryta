const { user } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.sendStatus(404);
  }
  await user
    .destroy({
      where: { username: userInfo.username },
    })
    .then(() => {
      res.sendStatus(201);
    });
};

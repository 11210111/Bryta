const { noticeBoard } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  const { username, content } = req.body;

  if (!userInfo) {
    res.sendStatus(404);
  } else {
    await noticeBoard.create({
      email: userInfo.email,
      username,
      content,
    });
  }

  res.sendStatus(201);
};

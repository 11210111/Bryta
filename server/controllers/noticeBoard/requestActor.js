const { noticeBoard } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  const { content } = req.body;

  if (!userInfo) {
    res.sendStatus(404);
  } else {
    await noticeBoard.create({
      username: userInfo.username,
      content,
    });
  }

  res.sendStatus(201);
};

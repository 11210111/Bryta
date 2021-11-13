const { user, noticeBoard } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    res.sendStatus(404);
  }
  const { username, password } = req.body;

  await noticeBoard.update(
    {
      username,
    },
    {
      where: {
        email: userInfo.email,
      },
    }
  );

  await user
    .update(
      {
        username,
        password,
      },
      {
        where: {
          email: userInfo.email,
        },
      }
    )
    .then(() => {
      res.sendStatus(201);
    });
};

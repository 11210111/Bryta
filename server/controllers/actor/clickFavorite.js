const { favorite } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  const { actorId } = req.body;

  const isFavorite = await favorite.findOne({
    where: {
      userId: userInfo.id,
      actorId,
    },
  });

  if (isFavorite) {
    res.sendStatus(404);
  } else {
    await favorite
      .create({
        userId: userInfo.id,
        actorId,
      })
      .then(() => {
        res.sendStatus(201);
      });
  }
};

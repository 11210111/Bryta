const { user, favorite, actor } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  console.log(userInfo);
  if (!userInfo) {
    res.sendStatus(404);
  } else {
    const favoriteActor = await user.findOne({
      include: [
        {
          model: favorite,
          require: true,
          attributes: ["actorId"],
          include: [
            {
              model: actor,
              require: true,
              attributes: ["actorName", "actorImage"],
            },
          ],
        },
      ],
      where: {
        id: userInfo.id,
      },
    });

    res.status(201).send({
      favoriteActor,
    });
  }
};

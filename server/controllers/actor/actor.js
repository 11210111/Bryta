const { actor } = require("../../models");

module.exports = {
  search: async (req, res) => {
    const { actorName } = req.query;
    const searchActor = await actor.findOne({
      where: {
        actorName,
      },
    });
    if (!searchActor) {
      res.sendStatus(404);
    } else {
      const payload = {
        id: searchActor.dataValues.id,
        actorName: searchActor.dataValues.actorName,
        actorImage: searchActor.dataValues.image,
      };
      res.status(200).send({ payload });
    }
  },
};

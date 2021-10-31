const { actor, actor_movie, movie } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const actorDetail = await actor.findOne({
    attributes: ["id", "actorName", "company", "bodySize", "debut", "image"],
    include: [
      {
        model: actor_movie,
        require: true,
        attributes: ["id", "actorId", "movieId"],
        include: [
          {
            model: movie,
            require: true,
            attributes: ["id", "movieName", "movieImage"],
          },
        ],
      },
    ],
    where: {
      id,
    },
  });
  res.status(201).send({
    actorDetail,
  });
};

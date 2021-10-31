const { actor, movie, actor_movie } = require("../../models");

module.exports = async (req, res) => {
  const data = await actor.findAll();
  const lastId = data.length;

  const randomData = await actor.findOne({
    attributes: ["id", "actorName", "image"],
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
        limit: 3,
      },
    ],
    where: { id: Math.floor(Math.random() * lastId + 1) },
  });
  res.status(201).send({
    actorMovie: randomData,
  });
};

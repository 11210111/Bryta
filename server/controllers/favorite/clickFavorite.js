const { favorite, actor_movie, user_movie, movie } = require("../../models");
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
    await favorite.create({
      userId: userInfo.id,
      actorId,
    });

    const movies = await actor_movie.findAll({
      where: {
        actorId,
      },
      include: [
        {
          model: movie,
          require: true,
          attributes: ["id", "movieName", "movieImage"],
        },
      ],
    });

    movies.map(async (el) => {
      await user_movie.create({
        userId: userInfo.id,
        movieId: el.movie.id,
        actorId,
        watch: false,
      });
    });
    res.sendStatus(201);
  }
};

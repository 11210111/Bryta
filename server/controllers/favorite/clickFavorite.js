const { favorite, actor_movie, user_movie, movie } = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  const { id } = req.params;

  const isFavorite = await favorite.findOne({
    where: {
      userId: userInfo.id,
      actorId: id,
    },
  });

  if (isFavorite) {
    res.sendStatus(404);
  } else {
    await favorite.create({
      userId: userInfo.id,
      actorId: id,
    });

    const movies = await actor_movie.findAll({
      where: {
        actorId: id,
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
        actorId: id,
        watch: false,
      });
    });
    res.sendStatus(201);
  }
};

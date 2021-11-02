const {
  user,
  favorite,
  actor_movie,
  movie,
  user_movie,
} = require("../../models");
const { isAuthorized } = require("../auth/token");

module.exports = {
  favoriteActor: async (req, res) => {
    const userInfo = isAuthorized(req);
    console.log(userInfo);
    if (!userInfo) {
      res.sendStatus(404);
    }
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
              attributes: ["actorName", "image"],
            },
          ],
        },
      ],
      attributes: ["id", "username", "email"],
      where: {
        id: userInfo.id,
      },
    });

    res.status(201).send({
      favoriteActor,
    });
  },

  favoriteMovie: async (req, res) => {
    const userInfo = isAuthorized(req);
    const { id } = req.params;
    if (!userInfo) {
      res.sendStatus(404);
    }

    const movieList = await user_movie.findAll({
      where: {
        userId: userInfo.id,
        actorId: id,
      },
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

    if (movieList) {
      res.status(201).send({
        movieList,
      });
    } else {
      await user_movie.create({});
    }

    res.status(201).send({
      movieList,
    });
  },
};

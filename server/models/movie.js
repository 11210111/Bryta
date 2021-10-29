"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      models.movie.hasMany(models.actor_movie, {
        foreignKey: "movieId",
      });
      models.movie.hasMany(models.user_movie, {
        foreignKey: "movieId",
      });
    }
  }
  movie.init(
    {
      movieName: DataTypes.STRING,
      movieImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "movie",
    }
  );
  return movie;
};

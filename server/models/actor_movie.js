"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor_movie extends Model {
    static associate(models) {
      models.actor_movie.belongsTo(models.actor, {
        foreignKey: "actorId",
      });
      models.actor_movie.belongsTo(models.movie, {
        foreignKey: "movieId",
      });
    }
  }
  actor_movie.init(
    {
      actorId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "actor_movie",
    }
  );
  return actor_movie;
};

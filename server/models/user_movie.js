"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_movie extends Model {
    static associate(models) {
      models.user_movie.belongsTo(models.movie, {
        foreignKey: "movieId",
      });
      models.user_movie.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  user_movie.init(
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      actorId: DataTypes.INTEGER,
      watch: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user_movie",
    }
  );
  return user_movie;
};

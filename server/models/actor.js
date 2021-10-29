"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    static associate(models) {
      models.actor.hasMany(models.favorite, {
        foreignKey: "actorId",
      });
      models.actor.hasMany(models.actor_movie, {
        foreignKey: "actorId",
      });
    }
  }
  actor.init(
    {
      actorName: DataTypes.STRING,
      company: DataTypes.STRING,
      bodySize: DataTypes.STRING,
      debut: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "actor",
    }
  );
  return actor;
};

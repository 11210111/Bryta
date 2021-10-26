"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    static associate(models) {}
  }
  actor.init(
    {
      actorName: DataTypes.STRING,
      company: DataTypes.STRING,
      bodySize: DataTypes.STRING,
      debut: DataTypes.STRING,
      actorImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "actor",
    }
  );
  return actor;
};

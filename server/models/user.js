"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.favorite, {
        foreignKey: "userId",
        onDelete: "cascade",
      });
      models.user.hasMany(models.user_movie, {
        foreignKey: "userId",
        onDelete: "cascade",
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    static associate(models) {
      models.favorite.belongsTo(models.user, {
        foreignKey: "userId",
      });
      models.favorite.belongsTo(models.actor, {
        foreignKey: "actorId",
      });
    }
  }
  favorite.init(
    {
      userId: DataTypes.INTEGER,
      actorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favorite",
    }
  );
  return favorite;
};

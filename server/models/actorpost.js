"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actorPost extends Model {
    static associate(models) {
      models.actorPost.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  actorPost.init(
    {
      userId: DataTypes.INTEGER,
      actorName: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "actorPost",
    }
  );
  return actorPost;
};

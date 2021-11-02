"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class noticeBoard extends Model {
    static associate(models) {}
  }
  noticeBoard.init(
    {
      username: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "noticeBoard",
    }
  );
  return noticeBoard;
};

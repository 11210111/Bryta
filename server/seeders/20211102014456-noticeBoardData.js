"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("noticeBoards", [
      {
        id: 1,
        email: "kimcoding@codestates.com",
        username: "kimcoding",
        content: "배우 하정우 추가 건의 드립니다!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: "parkhacker@codestates.com",
        username: "parkhacker",
        content: "배우 황정민 추가 부탁드립니다!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: "kimcoding@codestates.com",
        username: "kimcoding",
        content: "배우 김고은 건의드립니다",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        email: "kimcoding@codestates.com",
        username: "kimcoding",
        content: "배우 유아인 추가 부탁드립니다!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("noticeBoards", null, {});
  },
};

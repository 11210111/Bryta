"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        email: "kimcoding@codestates.com",
        username: "kimcoding",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: "parkhacker@codestates.com",
        username: "parkhacker",
        password: "5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("actors", [
      {
        id: 1,
        actorName: "하정우",
        company: "워크하우스 컴퍼니",
        bodySize: "184cm",
        debut: "2003년 영화 '마들렌'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201703%2F20170309160737361.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        actorName: "황정민",
        company: "샘컴퍼니",
        bodySize: "180cm, 75kg",
        debut: "1994년 뮤지컬 '지하철 1호선'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202003%2F20200316134444946.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

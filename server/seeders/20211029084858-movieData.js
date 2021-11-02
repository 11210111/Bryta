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
    await queryInterface.bulkInsert("movies", [
      {
        id: 1,
        movieName: "야행",
        movieImage:
          "https://movie-phinf.pstatic.net/20210222_229/1613976027387t04cy_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        movieName: "보스턴 1947",
        movieImage:
          "https://ssl.pstatic.net/static/movie/2012/06/dft_img133x190.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        movieName: "피랍",
        movieImage:
          "https://ssl.pstatic.net/static/movie/2012/06/dft_img133x190.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        movieName: "클로젯",
        movieImage:
          "https://movie-phinf.pstatic.net/20200116_23/1579154974413LvtIf_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        movieName: "백두산",
        movieImage:
          "https://movie-phinf.pstatic.net/20191219_263/15767415637757HPgg_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        movieName: "걸캅스",
        movieImage:
          "https://movie-phinf.pstatic.net/20190418_272/155557683107045leS_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        movieName: "PMC:더 벙커",
        movieImage:
          "https://movie-phinf.pstatic.net/20181205_284/1543974277191S4IrC_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        movieName: "신과함께-인과 연",
        movieImage:
          "https://movie-phinf.pstatic.net/20201230_128/1609305001387CUHXK_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        movieName: "1987",
        movieImage:
          "https://movie-phinf.pstatic.net/20171215_265/1513327177055W7qpm_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        movieName: "신과함께-죄와 벌",
        movieImage:
          "https://movie-phinf.pstatic.net/20201230_252/1609304926719vwxpF_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        movieName: "서서평, 천천히 평온하게",
        movieImage:
          "https://movie-phinf.pstatic.net/20170320_65/1489970121837vBFPN_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        movieName: "싱글라이더",
        movieImage:
          "https://movie-phinf.pstatic.net/20170223_77/1487828550952mDECT_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        movieName: "터널",
        movieImage:
          "https://movie-phinf.pstatic.net/20160801_255/1470026857430Xg6aK_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        movieName: "아가씨",
        movieImage:
          "https://movie-phinf.pstatic.net/20160523_204/14639851237601hEGQ_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        movieName: "암살",
        movieImage:
          "https://movie-phinf.pstatic.net/20150713_74/14367488229802tA3J_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        movieName: "허삼관",
        movieImage:
          "https://movie-phinf.pstatic.net/20150107_160/1420610011121ldDLL_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        movieName: "군도:민란의 시대",
        movieImage:
          "https://movie-phinf.pstatic.net/20140627_105/1403832280951tgmxv_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        movieName: "롤러코스터",
        movieImage:
          "https://movie-phinf.pstatic.net/20130925_147/1380084206940OzUNc_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        movieName: "하정우 부라더스",
        movieImage:
          "https://movie-phinf.pstatic.net/20131014_142/1381742860643RjOvF_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        movieName: "더 테러 라이브",
        movieImage:
          "https://movie-phinf.pstatic.net/20130722_208/1374462076401seeEk_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        movieName: "시네노트",
        movieImage:
          "https://movie-phinf.pstatic.net/20120201_91/1328081406176w2qzV_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        movieName: "베를린",
        movieImage:
          "https://movie-phinf.pstatic.net/20130128_162/1359336144110Ko1W2_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        movieName: "577 프로젝트",
        movieImage:
          "https://movie-phinf.pstatic.net/20120808_23/1344390078292TtAQy_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        movieName: "러브픽션",
        movieImage:
          "https://movie-phinf.pstatic.net/20120109_223/1326074891823WB4wS_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        movieName: "범죄와의 전쟁: 나쁜놈들 전성시대",
        movieImage:
          "https://movie-phinf.pstatic.net/20111224_165/13246577572754h14b_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        movieName: "의뢰인",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_142/1324646482436YSvXF_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        movieName: "사랑한다, 사랑하지 않는다",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_24/1324632174090EHT1N_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        movieName: "황해",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_205/1324629742378RJsDQ_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        movieName: "평행이론",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_84/1324603910727rthys_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        movieName: "국가대표",
        movieImage:
          "https://movie-phinf.pstatic.net/20120103_32/1325584763019wyepw_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31,
        movieName: "보트",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_184/13245728914136xaPW_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        movieName: "잘 알지도 못하면서",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_188/132457397670367tKl_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33,
        movieName: "멋진 하루",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_166/1324555016338mEtyB_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34,
        movieName: "울학교 이티",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_119/1324547078534fB5pE_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35,
        movieName: "비스티 보이즈",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_189/1324574112430kwngz_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36,
        movieName: "추격자",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_156/1324566721937R1fPE_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37,
        movieName: "우리 생애 최고의 순간",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_44/1324567143749EUxfp_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38,
        movieName: "두번째 사랑",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_202/1324583459627VgTbB_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39,
        movieName: "숨",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_154/1324520103334kYqLl_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40,
        movieName: "히트",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_290/1324578818110e5Jbl_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41,
        movieName: "나, 그런 사람 아니에요",
        movieImage:
          "https://ssl.pstatic.net/static/movie/2012/06/dft_img133x190.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42,
        movieName: "구미호 가족",
        movieImage:
          "https://movie-phinf.pstatic.net/20111223_44/1324574939723YrnAp_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43,
        movieName: "시간",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_132/13245087971425iuqf_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44,
        movieName: "황금어장",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_204/1324548243458DbaFy_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45,
        movieName: "용서받지 못한 자",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_45/1324520687840cQP9b_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 46,
        movieName: "프라하의 연인",
        movieImage:
          "https://movie-phinf.pstatic.net/20111216_124/13240257506993aU8i_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47,
        movieName: "잠복근무",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_9/13245274330709gy4C_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48,
        movieName: "슈퍼스타 감사용",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_136/1324528464415AIfhT_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 49,
        movieName: "무인시대",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_10/1324565599348rKHdn_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 50,
        movieName: "마들렌",
        movieImage:
          "https://movie-phinf.pstatic.net/20111222_114/1324530475774Tbepp_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 51,
        movieName: "똑바로 살아라",
        movieImage:
          "https://movie-phinf.pstatic.net/20171101_195/1509506918976Hl28m_JPEG/movie_image.jpg?type=m133_190_2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      {
        id: 3,
        actorName: "송강호",
        company: "써브라임아티스트에이전시",
        bodySize: "180cm, 80kg",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202102%2F20210222160936234.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        actorName: "류승룡",
        company: "프레인글로벌(프레인TPC)",
        bodySize: "",
        debut: "2004년 영화 '아는 여자'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201902%2F20190212162454882-3571992.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        actorName: "유해진",
        company: "키이스트",
        bodySize: "174cm, 65kg",
        debut: "1997년 영화 '블랙잭'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202103%2F2021032416372949.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        actorName: "이정재",
        company: "아티스트컴퍼니",
        bodySize: "180cm",
        debut: "1993년 SBS 드라마 '공룡선생'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F42%2F201812191840306281.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        actorName: "오달수",
        company: "씨제스엔터테인먼트",
        bodySize: "176cm, 68kg, B형",
        debut: "1990년 극단 연회단거리패 입단",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F94%2F201303131549208821.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        actorName: "김윤석",
        company: "스튜디오 산타클로스엔터테인먼트",
        bodySize: "178cm, 68kg",
        debut: "1988년 연극 '욕망이라는 이름의 전차'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F43%2F201404021448328811.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        actorName: "강동원",
        company: "YG엔터테인먼트",
        bodySize: "186cm, 66kg",
        debut: "2003년 MBC 드라마 '위풍당당 그녀'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F37%2F201604181854386741.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        actorName: "마동석",
        company: "빅펀치엔터테인먼트",
        bodySize: "178cm, 100kg",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202012%2F20201207192857469.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        actorName: "이병헌",
        company: "BH엔터테인먼트",
        bodySize: "177cm, 72kg",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201810%2F201810021644077.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        actorName: "설경구",
        company: "씨제스엔터테인먼트",
        bodySize: "178cm",
        debut: "1993년 연극 '심바새매'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201707%2F20170712110232236-4258953.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        actorName: "주지훈",
        company: "에이치앤드엔터테인먼트",
        bodySize: "187cm",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201502%2F20150204115955124-6648994.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        actorName: "최민식",
        company: "씨제스엔터테인먼트",
        bodySize: "177cm, 70kg",
        debut: "1989년 드라마 '야망의 세월'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201607%2F20160706172032800.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        actorName: "조진웅",
        company: "사람엔터테인먼트",
        bodySize: "",
        debut: "2004년 영화 '말죽거리 잔혹사'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201708%2F20170821165401677.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        actorName: "유아인",
        company: "United Artist Agency",
        bodySize: "A형",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F139%2F201810151034496351.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        actorName: "공유",
        company: "매니지먼트 숲",
        bodySize: "184cm, 74kg, A형",
        debut: "2001년 KBS 드라마 '학교 4'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202107%2F20210722120819584.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        actorName: "김향기",
        company: "지킴엔터테인먼트",
        bodySize: "",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F138%2F201911221208562971.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        actorName: "손예진",
        company: "엠에스팀엔터테인먼트",
        bodySize: "165cm",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202002%2F20200228151453288.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        actorName: "차태현",
        company: "블러썸 엔터테인먼트",
        bodySize: "",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201608%2F20160810155746864.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        actorName: "박해일",
        company: "에스더블유엠피",
        bodySize: "177cm, 68kg, O형",
        debut: "2000년 연극 '청춘예찬'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201506%2F20150613010719340-7239341.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        actorName: "전지현",
        company: "문화창고",
        bodySize: "",
        debut: "1997년 패션잡지 '에꼴'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210607161142258.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        actorName: "김명민",
        company: "씨제스엔터테인먼트",
        bodySize: "180cm, 65kg",
        debut: "1996년 SBS 6기 공채 탤런트",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202103%2F20210303145401112.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        actorName: "조정석",
        company: "잼엔터테인먼트",
        bodySize: "",
        debut: "2004년 뮤지컬 '호두까기인형'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202108%2F202108201044543.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        actorName: "엄정화",
        company: "사람엔터테인먼트",
        bodySize: "A형",
        debut: "1993년 영화 '바람 부는 날이면 압구정동에 가야한다'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201908%2F20190816151112982.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        actorName: "김혜수",
        company: "호두앤유엔터테인먼트",
        bodySize: "",
        debut: "1986년 영화 '깜보'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F42%2F201802141225151721.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        actorName: "정우성",
        company: "아티스트컴퍼니",
        bodySize: "186cm",
        debut: "1994년 영화 '구미호'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201812%2F20181220111450105.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        actorName: "류준열",
        company: "씨제스엔터테인먼트",
        bodySize: "183cm, 70kg",
        debut: "2015년 영화 '소셜포비아'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201905%2F20190528142316857-8531317.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        actorName: "심은경",
        company: "",
        bodySize: "",
        debut: "2003년 드라마 '대장금'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201801%2F20180104100848526-1340226.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        actorName: "이하늬",
        company: "사람엔터테인먼트",
        bodySize: "",
        debut: "2006년 제50회 미스코리아 선발대회",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210617145942474.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31,
        actorName: "곽도원",
        company: "마다엔터테인먼트",
        bodySize: "",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210603120556175.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        actorName: "이선균",
        company: "호두앤유엔터테인먼트",
        bodySize: "",
        debut: "2001년 뮤지컬 '록키호러쇼'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201705%2F20170510003420102-7278827.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33,
        actorName: "하지원",
        company: "해와달엔터테인먼트",
        bodySize: "",
        debut: "1996년 KBS 신세대 보고 - 어른들은 몰라요",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202002%2F20200224175055200.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34,
        actorName: "김윤진",
        company: "자이온엔터테인먼트",
        bodySize: "168cm, 48kg",
        debut: "1996년 MBC 드라마 '화려한 휴가'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F194%2F201005241048583111.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35,
        actorName: "류승범",
        company: "샘컴퍼니",
        bodySize: "178cm, 68kg",
        debut: "2000년 영화 '죽거나 혹은 나쁘거나'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F122%2F201011091145128401.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36,
        actorName: "한효주",
        company: "BH엔터테인먼트",
        bodySize: "",
        debut: "2003년 미스 빙그레 선발대회",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202006%2F20200609190539136.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37,
        actorName: "현빈",
        company: "VAST엔터테인먼트",
        bodySize: "185cm, 74kg",
        debut: "2003년 KBS 드라마 '보디가드'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201909%2F20190909110909451-6101473.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38,
        actorName: "성동일",
        company: "서진 E&M",
        bodySize: "177cm, 78kg",
        debut: "1991년 SBS 1기 공채 탤런트",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F84%2F200803031339272621.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39,
        actorName: "이동휘",
        company: "키이스트",
        bodySize: "179cm, 67kg",
        debut: "",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202107%2F20210719185949590.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40,
        actorName: "박보영",
        company: "BH엔터테인먼트",
        bodySize: "",
        debut: "2006년 EBS 드라마 '비밀의 교정'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F15%2F202005111648169131.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41,
        actorName: "김동욱",
        company: "키이스트",
        bodySize: "B형",
        debut: "2004년 영화 '순흔'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202107%2F2021072301331283.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42,
        actorName: "최우식",
        company: "매니지먼트 숲",
        bodySize: "",
        debut: "2011년 MBC 드라마 '짝패'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201911%2F20191111162806970-8759926.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43,
        actorName: "조여정",
        company: "높은엔터테인먼트",
        bodySize: "163cm",
        debut: "1997년 잡지 'Ceci' 모델",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201408%2F2014081216530934-7249138.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 44,
        actorName: "진선규",
        company: "엘줄라이엔터테인먼트",
        bodySize: "177cm",
        debut: "2004년 연극 '거울공주 평강이야기'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F159%2F201901211445306131.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 45,
        actorName: "김남길",
        company: "길스토리이엔티",
        bodySize: "184cm",
        debut: "1999년 KBS2 드라마 '학교'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202106%2F20210629202332185.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 46,
        actorName: "김무열",
        company: "프레인TPC",
        bodySize: "183cm",
        debut: "1999년 영화 '사이간'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201206%2F2012061311455478-3465371.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 47,
        actorName: "공명",
        company: "사람엔터테인먼트",
        bodySize: "183cm",
        debut: "2013년 웹드라마 방과후 복불복 시즌1",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202011%2F20201102135115429.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 48,
        actorName: "정재영",
        company: "아우터코리아 엔터테인먼트",
        bodySize: "180cm",
        debut: "1995년 연극 '허탕'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F146%2F202109061941584561.gif&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 49,
        actorName: "정유미",
        company: "숲엔터테인먼트",
        bodySize: "163cm",
        debut: "2003년 단편 영화 '사랑하는 소녀'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F122%2F201703151820454931.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 50,
        actorName: "강하늘",
        company: "TH컴퍼니",
        bodySize: "181cm",
        debut: "2007년 KBS 2TV 드라마 '최강! 울엄마'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202002%2F20200203155236234-7932904.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 51,
        actorName: "안성기",
        company: "아티스트컴퍼니",
        bodySize: "175cm",
        debut: "1957년 영화 '황혼열차'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F21%2F201302271816087311.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 52,
        actorName: "한석규",
        company: "클로버컴퍼니",
        bodySize: "178cm",
        debut: "1990년 KBS 성우극회 22기",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F201505%2F20150514181602930.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 53,
        actorName: "박중훈",
        company: "나무엑터스",
        bodySize: "178cm",
        debut: "1986년 영화 깜보",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202107%2F20210716143845587.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 54,
        actorName: "장동건",
        company: "디엔터테인먼트컴퍼니",
        bodySize: "181cm",
        debut: "1992년 MBC 21기 공채 탤런트",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F104%2F201904151435119511.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 55,
        actorName: "정진영",
        company: "FNC엔터테인먼트",
        bodySize: "175cm",
        debut: "1988년 연극 '대결'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202104%2F2021042814480688.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 56,
        actorName: "강수연",
        company: "무소속",
        bodySize: "162cm",
        debut: "1966년 영화 '핏줄'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F50%2F201302271821397491.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 57,
        actorName: "이미숙",
        company: "",
        bodySize: "",
        debut: "1978년 제3회 미스 롯데 선발대회",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F172%2F201204301825039481.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 58,
        actorName: "차승원",
        company: "YG엔터테인먼트",
        bodySize: "188cm",
        debut: "1988년 모델라인 18기",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F19%2F201608121456331871.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 59,
        actorName: "신현준",
        company: "HJ FILM",
        bodySize: "184cm",
        debut: "1990년 영화 '장군의 아들'",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202102%2F20210215121042224.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 60,
        actorName: "최진실",
        company: "",
        bodySize: "",
        debut: "1988년 삼성전자 TV CF",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F56%2F201404161358287651.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 61,
        actorName: "최민수",
        company: "매니지먼트 율",
        bodySize: "180cm",
        debut: "1985년 연극 〈방황하는 별들〉",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F35%2F201710101911049321.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 62,
        actorName: "이경영",
        company: "다홍 엔터테인먼트",
        bodySize: "171cm",
        debut: "1987년 연산일기",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F156%2F202012151437249261.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 63,
        actorName: "이성재",
        company: "아이오케이컴퍼니",
        bodySize: "180cm",
        debut: "1995년 MBC 24기 공채 탤런트",
        image:
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2Fportrait%2F202104%2F20210412173154475.jpg&type=u120_150&quality=95",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("actors", null, {});
  },
};

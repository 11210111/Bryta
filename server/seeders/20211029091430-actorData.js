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
          "https://user-images.githubusercontent.com/81801426/141088847-263142bb-cd07-4a1c-9990-a7cecded6a14.png",
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
          "https://user-images.githubusercontent.com/81801426/141088652-3202289b-f137-4a1e-b8ed-0c318bc1192c.png",
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
          "https://user-images.githubusercontent.com/81801426/141088634-b5d3b9a1-6241-458a-afad-79c3c007cb47.png",
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
          "https://user-images.githubusercontent.com/81801426/141088802-32568ab6-bdc5-4a3d-b5e0-e78fed8dc2cc.png",
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
          "https://user-images.githubusercontent.com/81801426/141088745-951f40a1-7241-46c2-bb52-1b14f5369ea6.png",
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
          "https://user-images.githubusercontent.com/81801426/141088727-aa541048-2759-45df-b4da-0224f3495f4c.png",
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
          "https://user-images.githubusercontent.com/81801426/141088751-deb6fbb6-8aaa-4334-99e5-1888407f460c.png",
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
          "https://user-images.githubusercontent.com/81801426/141088816-cd8efeaf-7e29-4a96-9858-2940a08d60b0.png",
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
          "https://user-images.githubusercontent.com/81801426/141088845-4bc028ae-f5dd-4e2e-9379-59814e50c1ef.png",
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
          "https://user-images.githubusercontent.com/81801426/141088792-75bab4d5-dd4d-4c03-9ddd-549abbb3e6cb.png",
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
          "https://user-images.githubusercontent.com/81801426/141088736-f29e15fe-642a-443b-aa49-3e9f4ec6cd52.png",
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
          "https://user-images.githubusercontent.com/81801426/141088775-e041e0c2-db17-4493-92bf-830ff17e267d.png",
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
          "https://user-images.githubusercontent.com/81801426/141088700-12ad66e0-a83a-4d4a-ac97-73ab00c5f20f.png",
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
          "https://user-images.githubusercontent.com/81801426/141088687-ddbbabbb-9e6a-4cfb-8130-8bd1a448afec.png",
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
          "https://user-images.githubusercontent.com/81801426/141088702-8196f261-6af3-4f2a-a1bc-a7472ce4a464.png",
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
          "https://user-images.githubusercontent.com/81801426/141088748-105fb659-8543-4d6c-bd6f-97be33534671.png",
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
          "https://user-images.githubusercontent.com/81801426/141088834-45ed1765-d73b-4bc7-a146-20c57f8b7ff7.png",
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
          "https://user-images.githubusercontent.com/81801426/141089237-00fc270f-1ddd-4844-b6f4-fe65262a1adf.png",
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
          "https://user-images.githubusercontent.com/81801426/141088766-7e8b01e2-5b11-4396-a0e0-376f4e8e8652.png",
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
          "https://user-images.githubusercontent.com/81801426/141088693-be3cffec-95f1-4b01-850a-859a7f75627f.png",
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
          "https://user-images.githubusercontent.com/81801426/141088781-053c2af7-1614-49b2-8b06-27b5e861be8f.png",
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
          "https://user-images.githubusercontent.com/81801426/141089213-ef395e12-96ff-4c4b-8445-8c3e865289b7.png",
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
          "https://user-images.githubusercontent.com/81801426/141088819-072805f7-a10f-4666-83b6-ee1d75471cf2.png",
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
          "https://user-images.githubusercontent.com/81801426/141088703-0a129cdc-f120-44ca-9f61-c88d9e42a642.png",
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
          "https://user-images.githubusercontent.com/81801426/141088754-26aa5ced-d88f-4819-96a2-92ff008e4b7a.png",
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
          "https://user-images.githubusercontent.com/81801426/141088808-7c7fcfbb-4e0c-4c93-96db-3fdbd896b7d5.png",
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
          "https://user-images.githubusercontent.com/81801426/141088712-45b1e8b2-49cd-4cde-b418-9b507258cb89.png",
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
          "https://user-images.githubusercontent.com/81801426/141088798-ab785d28-8f9d-4fe8-9ba4-d6cf625eb15e.png",
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
          "https://user-images.githubusercontent.com/81801426/141088760-ccf329ce-b224-4336-950f-a34a17bc5c9b.png",
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
          "https://user-images.githubusercontent.com/81801426/141088724-40ca4c38-fb00-4dfe-9ec9-cb721b32b81a.png",
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
          "https://user-images.githubusercontent.com/81801426/141088829-8791ebb3-b71e-4031-ac08-eb0c2a0d917c.png",
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
          "https://user-images.githubusercontent.com/81801426/141088733-0243be62-c562-4572-8bd7-efdfed0b8ac3.png",
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
          "https://user-images.githubusercontent.com/81801426/141088674-d32d4a70-16f9-4e5e-8e3d-ba1c590ad53e.png",
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
          "https://user-images.githubusercontent.com/81801426/141088813-9343ee66-26a4-4b45-99b8-6f237bd87d65.png",
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
          "https://user-images.githubusercontent.com/81801426/141088801-e1e3d234-fcd4-480a-87cc-acdbf1f67504.png",
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
          "https://user-images.githubusercontent.com/81801426/141088664-e8ba2ada-1416-4526-be91-895da2da8c14.png",
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
          "https://user-images.githubusercontent.com/81801426/141088658-20f54eb8-7147-435a-8bf9-e6580d27855c.png",
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
          "https://user-images.githubusercontent.com/81801426/141088772-6423f2b3-ff90-4c9d-bd5b-21264d79b5ce.png",
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
          "https://user-images.githubusercontent.com/81801426/141088742-975ba6ee-d54a-4031-86a1-20652b99836d.png",
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
          "https://user-images.githubusercontent.com/81801426/141088788-74a97e85-63a6-4a69-ada7-9a52c5118ba2.png",
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
          "https://user-images.githubusercontent.com/81801426/141088822-8683989a-30fd-4753-bffc-70d00d2e433d.png",
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
          "https://user-images.githubusercontent.com/81801426/141088679-45bedac5-f4c2-4735-aac6-e93e95330625.png",
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
          "https://user-images.githubusercontent.com/81801426/141088704-05cf2a41-bc65-4a1b-93bd-acab381b471a.png",
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
          "https://user-images.githubusercontent.com/81801426/141088698-785350a5-9132-4238-8809-e013829b487d.png",
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
          "https://user-images.githubusercontent.com/81801426/141088826-00098d3c-8e7a-44d4-9980-60c992a69797.png",
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
          "https://user-images.githubusercontent.com/81801426/141088818-096a5bf8-4f6e-43a3-8bb5-60cdffb1e974.png",
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
          "https://user-images.githubusercontent.com/81801426/141088836-164fe276-a68e-4afb-931d-7d9f2bf61008.png",
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
          "https://user-images.githubusercontent.com/81801426/141088709-fc8a9dcb-7a43-4d1f-b669-55e277912c82.png",
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
          "https://user-images.githubusercontent.com/81801426/141088710-cd7838fd-dad2-4deb-96ee-9ff220f773a1.png",
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
          "https://user-images.githubusercontent.com/81801426/141088839-3ca39df9-ce21-4d0a-8cd3-2ca0442bc5d7.png",
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
          "https://user-images.githubusercontent.com/81801426/141089232-a133ae74-a267-42a8-b368-d6bdfb7c806e.png",
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
          "https://user-images.githubusercontent.com/81801426/141088671-67be8fa5-09c1-4386-94aa-f0a5024a2031.png",
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
          "https://user-images.githubusercontent.com/81801426/141088784-eb0d821c-2496-486c-8585-74e001f43705.png",
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
          "https://user-images.githubusercontent.com/81801426/141088720-6a8c7e65-e560-4a3c-b144-e6a55aa88354.png",
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
          "https://user-images.githubusercontent.com/81801426/141088707-9b9bbf1b-b68c-46d9-9a18-6c1a9dd64230.png",
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
          "https://user-images.githubusercontent.com/81801426/141088841-a544de4e-0ee2-47ac-9bc3-3b3d1cf9ac48.png",
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
          "https://user-images.githubusercontent.com/81801426/141088740-61dea5eb-8099-434a-9713-5bdad55d3e6a.png",
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
          "https://user-images.githubusercontent.com/81801426/141088696-c5f7ab6e-1abe-4bff-8f17-2e2e9f36f429.png",
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
          "https://user-images.githubusercontent.com/81801426/141088763-0871530d-76b7-453c-8790-8f81f3b7ae31.png",
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
          "https://user-images.githubusercontent.com/81801426/141088677-5107366c-c40b-432d-ade2-9539b230399b.png",
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
          "https://user-images.githubusercontent.com/81801426/141088683-a2702d48-b503-4e47-9a32-dcb57725edcf.png",
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
          "https://user-images.githubusercontent.com/81801426/141088743-9e8cf4f4-dbdd-44bc-a882-f4157e286028.png",
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
          "https://user-images.githubusercontent.com/81801426/141088730-da7b625e-8e77-437c-a965-1545a76fcebf.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("actors", null, {});
  },
};

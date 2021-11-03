const express = require("express");
const router = express.Router();
const {
  search,
  recommendation,
  actorDetail,
  clickFavorite,
} = require("../controllers");

router.get("/search", search);
router.get("/recommendation", recommendation);
router.post("/clickFavorite", clickFavorite);
router.get("/:id", actorDetail);

module.exports = router;

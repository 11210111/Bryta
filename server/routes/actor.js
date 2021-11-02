const express = require("express");
const router = express.Router();
const { search, recommendation, actorDetail } = require("../controllers");

router.get("/search", search);
router.get("/recommendation", recommendation);
router.get("/:id", actorDetail);

module.exports = router;

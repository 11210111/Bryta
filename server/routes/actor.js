const express = require("express");
const router = express.Router();
const { search, add, recommendation, actorDetail } = require("../controllers");

router.get("/search", search);
router.post("/add", add);
router.get("/recommendation", recommendation);
router.get("/:id", actorDetail);

module.exports = router;

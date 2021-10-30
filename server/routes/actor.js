const express = require("express");
const router = express.Router();
const { search, add, recommendation } = require("../controllers");

router.get("/search", search);
router.post("/add", add);
router.get("/recommendation", recommendation);

module.exports = router;

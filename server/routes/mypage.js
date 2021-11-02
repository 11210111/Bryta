const express = require("express");
const router = express.Router();
const { favorite } = require("../controllers");

router.get("/favorite", favorite);

module.exports = router;

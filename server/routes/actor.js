const express = require("express");
const router = express.Router();
const { search, add } = require("../controllers/actor/actor");

router.route("/actor").get("/search", search);
router.route("/actor").post("/add", add);

module.exports = router;

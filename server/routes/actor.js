const express = require("express");
const router = express.Router();
const { search } = require("../controllers/actor/actor");

router.route("/actor").get("/search", search);

module.exports = router;

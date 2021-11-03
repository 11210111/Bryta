const express = require("express");
const router = express.Router();
const { post, requestActor } = require("../controllers");

router.get("/", post);
router.post("/", requestActor);

module.exports = router;

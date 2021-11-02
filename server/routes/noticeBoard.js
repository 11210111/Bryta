const express = require("express");
const router = express.Router();
const { post, requestActor } = require("../controllers");

router.get("/post", post);
router.post("/requestActor", requestActor);

module.exports = router;

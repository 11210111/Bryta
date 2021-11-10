const express = require("express");
const router = express.Router();
const { login, logout, signup, getAccessToken } = require("../controllers");

router.get("/logout", logout);
router.post("/login", login);
router.post("/signup", signup);
router.post("/kakao/getAccessToken", getAccessToken);

module.exports = router;

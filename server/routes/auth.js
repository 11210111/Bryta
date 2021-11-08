const express = require("express");
const router = express.Router();
const {
  login,
  logout,
  signup,
  getAccessToken,
  getUserInfo,
} = require("../controllers");

router.get("/logout", logout);
router.post("/login", login);
router.post("/signup", signup);
router.post("/kakao/getAccessToken", getAccessToken);
router.get("/kakao/getUserInfo", getUserInfo);

module.exports = router;

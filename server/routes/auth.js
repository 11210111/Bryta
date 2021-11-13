const express = require("express");
const router = express.Router();
const {
  login,
  logout,
  signup,
  getAccessToken,
  validateEmail,
} = require("../controllers");

router.get("/logout", logout);
router.post("/login", login);
router.post("/signup", signup);
router.post("/validateEmail", validateEmail);
router.post("/kakao/getAccessToken", getAccessToken);

module.exports = router;

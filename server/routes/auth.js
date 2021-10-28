const express = require("express");
const router = express.Router();
const { login, logout, signup, oauth } = require("../controllers");

router.post("/login", login);
router.get("/logout", logout);
router.post("/signup", signup);
router.post("/oauth", oauth);

module.exports = router;

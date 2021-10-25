const express = require("express");
const router = express.Router();
const { login, logout, signup, oauth } = require("../controllers");

router.get("/login", login);

module.exports = router;

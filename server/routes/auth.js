const express = require("express");
const router = express.Router();
const { login, logout, signup, oauth } = require("../controllers/auth");

router.get("/login", login);

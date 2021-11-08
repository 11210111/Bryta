const express = require("express");
const router = express.Router();
const { updateProfile, deleteAccount } = require("../controllers");

router.delete("/", deleteAccount);
router.patch("/", updateProfile);

module.exports = router;

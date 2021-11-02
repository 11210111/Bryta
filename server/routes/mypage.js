const express = require("express");
const router = express.Router();
const {
  favoriteActor,
  favoriteMovie,
  updateProfile,
  deleteAccount,
} = require("../controllers");

router.get("/favoriteActor", favoriteActor);
router.get("/deleteAccount", deleteAccount);
router.post("/updateProfile", updateProfile);
router.get("/:id", favoriteMovie);

module.exports = router;

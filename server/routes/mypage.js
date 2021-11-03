const express = require("express");
const router = express.Router();
const {
  favoriteActor,
  favoriteMovie,
  updateProfile,
  deleteAccount,
  deleteFavorite,
} = require("../controllers");

router.get("/favoriteActor", favoriteActor);
router.get("/deleteAccount", deleteAccount);
router.post("/updateProfile", updateProfile);
router.post("/deleteFavorite", deleteFavorite);
router.get("/:id", favoriteMovie);

module.exports = router;

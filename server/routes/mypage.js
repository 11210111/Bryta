const express = require("express");
const router = express.Router();
const {
  favoriteActor,
  favoriteMovie,
  updateProfile,
} = require("../controllers");

router.get("/favoriteActor", favoriteActor);
router.get("/:id", favoriteMovie);
router.post("/updateProfile", updateProfile);

module.exports = router;

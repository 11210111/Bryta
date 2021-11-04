const express = require("express");
const router = express.Router();
const {
  favoriteActor,
  favoriteMovie,
  clickFavorite,
  deleteFavorite,
  watchButton,
} = require("../controllers");

router.get("/", favoriteActor);
router.get("/:id", favoriteMovie);
router.post("/", clickFavorite);
router.patch("/:actorId/:movieId", watchButton);
router.delete("/", deleteFavorite);

module.exports = router;

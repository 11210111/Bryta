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
router.post("/:id", clickFavorite);
router.patch("/watch", watchButton);
router.delete("/:id", deleteFavorite);

module.exports = router;

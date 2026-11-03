import express from "express";

import {
  addActorToMovie,
  getMovieActors,
  removeActorFromMovie,
  addGenreToMovie,
  getMovieGenres,
  removeGenreFromMovie,
} from "../controllers/relationController.js";

const router = express.Router();

// Movie - Actor
router.post("/movie-actors", addActorToMovie);
router.get("/movies/:movieId/actors", getMovieActors);
router.delete("/movie-actors/:id", removeActorFromMovie);

// Movie - Genre
router.post("/movie-genres", addGenreToMovie);
router.get("/movies/:movieId/genres", getMovieGenres);
router.delete("/movie-genres/:id", removeGenreFromMovie);

export default router;

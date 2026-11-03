import MovieActor from "../models/MovieActor.js";
import MovieGenre from "../models/MovieGenre.js";

export const addActorToMovie = async (req, res) => {
  try {
    const relation = await MovieActor.create({
      movieId: req.body.movieId,
      actorId: req.body.actorId,
      roleName: req.body.roleName,
    });

    res.status(201).json({
      success: true,
      data: relation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMovieActors = async (req, res) => {
  try {
    const actors = await MovieActor.find({
      movieId: req.params.movieId,
    }).populate("actorId", "name birthDate nationality");

    res.status(200).json({
      success: true,
      count: actors.length,
      data: actors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeActorFromMovie = async (req, res) => {
  try {
    const relation = await MovieActor.findByIdAndDelete(req.params.id);

    if (!relation) {
      return res.status(404).json({
        success: false,
        message: "Relation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Actor removed from movie",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addGenreToMovie = async (req, res) => {
  try {
    const relation = await MovieGenre.create({
      movieId: req.body.movieId,
      genreId: req.body.genreId,
    });

    res.status(201).json({
      success: true,
      data: relation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMovieGenres = async (req, res) => {
  try {
    const genres = await MovieGenre.find({
      movieId: req.params.movieId,
    }).populate("genreId", "name");

    res.status(200).json({
      success: true,
      count: genres.length,
      data: genres,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeGenreFromMovie = async (req, res) => {
  try {
    const relation = await MovieGenre.findByIdAndDelete(req.params.id);

    if (!relation) {
      return res.status(404).json({
        success: false,
        message: "Relation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Genre removed from movie",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

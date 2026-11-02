import mongoose from "mongoose";

const movieGenreSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
});

movieGenreSchema.index({ movieId: 1, genreId: 1 }, { unique: true });

const MovieGenre = mongoose.model("MovieGenre", movieGenreSchema);

export default MovieGenre;

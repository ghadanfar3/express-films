import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

import mongoose from "mongoose";

const movieActorSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  actorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Actor",
    required: true,
  },
  roleName: {
    type: String,
    required: true,
    trim: true,
  },
});

movieActorSchema.index({ movieId: 1, actorId: 1 }, { unique: true });

const MovieActor = mongoose.model("MovieActor", movieActorSchema);

export default MovieActor;

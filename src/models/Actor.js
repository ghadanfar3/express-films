import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
  },
},
{
    timestamps: true,
    }
);

const Actor = mongoose.model("Actor", actorSchema);

export default Actor;

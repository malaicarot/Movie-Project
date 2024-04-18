import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: { type: String, require: true, unique: true },
  time: { type: Number},
  year: { type: Number},
  image: { type: String },
  introduce: { type: String, require: true, unique: true },
});

const MovieModel = mongoose.model("movies", movieSchema);

export default MovieModel;

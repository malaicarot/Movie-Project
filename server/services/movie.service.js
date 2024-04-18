import MovieModel from "../models/movie.model.js";
// import escapeStringRegexp from "escape-string-regexp";
import {v2 as cloudinary} from 'cloudinary';

const getAllMovies = async () => {
  const movies = await MovieModel.find({});
  return { success: true, movies };
};

const addMovies = async (movie) => {
  const currentMovie = await MovieModel.findOne({ name: movie.name });

  if (currentMovie) {
    throw new Error("Movie is exist!");
  }

  const newMovie = new MovieModel({
    name: movie.name,
    time: movie.time,
    year: movie.year,
    image: movie.image,
    introduce: movie.introduce,
  });

  await newMovie.save();

  return { success: true, movie: newMovie };
};

const deleteMovies = async (movieId, userId) => {
  const deleteMovieCondition = { _id: movieId, user: userId };
  const deleteMovie = await MovieModel.findByIdAndDelete(deleteMovieCondition);

  if (!deleteMovie) {
    throw new Error("Cannot delete post!!!");
  }

  return { success: true, deleteMovie };
};

const updateMovies = async (movieId, movie, file) => {
  const currentMovie = await MovieModel.findById({ _id: movieId });

  if (!currentMovie) {
    throw new Error("Cannot Update Movie");
  }
  for (const key in movie) {
    currentMovie[key] = movie[key];
  }

  // Upload img

  const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString(
    "base64"
  )}`;
  const fileName = file.originalname.split(".")[0];

  const data = await cloudinary.uploader.upload(
    dataUrl,
    {
      public_id: fileName,
      resource_type: "auto",
      folder: "Movies_Project"
    },
  )
  currentMovie.image = data.secure_url;


  await currentMovie.save();
  return { success: true, movie: currentMovie };
};

const findMovieByName = async (name) => {
    
  const currentMovie = await MovieModel.find({ name: { $regex: `${name.name}` }});


  return { success: true, movie: currentMovie };
};


const sortMovieByYear = async () => {
  const movies = await MovieModel.find().sort({ year: 1 }).exec()
  return { success: true,  movies }; 
};



const getById = async (movieId) => {
  const movie = await MovieModel.findById(movieId)
  return { success: true,  movie }; 
};

export const MovieService = {
  getAllMovies,
  addMovies,
  deleteMovies,
  updateMovies,
  findMovieByName,
  sortMovieByYear,
  getById
};

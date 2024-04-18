import { MovieService } from "../services/movie.service.js";

const getAllMovies = async (req, res) => {
  try {
    res.json(await MovieService.getAllMovies());
  } catch (error) {
    console.log("Error while get movies!");
    res.json({ success: false, message: error.message });
  }
};

const addMovies = async (req, res) => {
  try {
    const movie = req.body;

    if (!movie) {
      throw new Error("Undefine Movie!!!");
    }
    res.json(await MovieService.addMovies(movie));
  } catch (error) {
    console.log("Error while add movies!");
    res.json({ success: false, message: error.message });
  }
};

const deleteMovies = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const userId = req.userId;


    if (!movieId) {
      throw new Error("Undefine Movie!!!");
    }
    res.json(await MovieService.deleteMovies(movieId, userId));
  } catch (error) {
    console.log("Error while delete movies!");
    res.json({ success: false, message: error.message });
  }
};


const updateMovies = async (req, res) => {
    try {
      const movieId = req.params.movieId;
      const file = req.file

      const movie = req.body;

      if(!movie){
        throw new Error("Undefine information to update!");

      }

      res.json(await MovieService.updateMovies(movieId, movie, file));
    } catch (error) {
      console.log("Error while update movies!");
      res.json({ success: false, message: error.message });
    }
  };


  const findMovieByName = async (req, res) => {
    try {
      const name = req.body;
      if(!name){
        throw new Error("Undefine Name!");
      }
      res.json(await MovieService.findMovieByName(name));
    } catch (error) {
      console.log("Error while find movies!");
      res.json({ success: false, message: error.message });
    }
  };


  const sortMovieByYear = async (req, res) => {
    try {

      res.json(await MovieService.sortMovieByYear());
    } catch (error) {
      console.log("Error while find movies!");
      res.json({ success: false, message: error.message });
    }
  };

  const getById = async (req, res) => {
    try {
      const movieId = req.params.movieId
      if(!movieId){
        throw new Error("Undefine Movie!");

      }
      res.json(await MovieService.getById(movieId));
    } catch (error) {
      console.log("Error while find movies!");
      res.json({ success: false, message: error.message });
    }
  };

export const MovieController = {
  getAllMovies,
  addMovies,
  deleteMovies,
  updateMovies,
  findMovieByName,
  sortMovieByYear,
  getById
};

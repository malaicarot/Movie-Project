import express from "express";
import { MovieController } from "../controller/movie.controller.js";
import verifyToken from "../middleware/verifyToken.middleware.js";
import { uploader } from "../middleware/uploader.middleware.js";

const MovieRouter = express.Router();

MovieRouter.get("/", MovieController.getAllMovies);

MovieRouter.post("/add-movie", verifyToken, MovieController.addMovies)

MovieRouter.delete("/delete-movie/:movieId", verifyToken, MovieController.deleteMovies)

MovieRouter.put("/update-movie/:movieId", verifyToken, uploader.single("file"), MovieController.updateMovies)

MovieRouter.get("/find", verifyToken, MovieController.findMovieByName)

MovieRouter.get("/sort", verifyToken, MovieController.findMovieByName)

MovieRouter.get("/get/:movieId", verifyToken, MovieController.getById)



export { MovieRouter };

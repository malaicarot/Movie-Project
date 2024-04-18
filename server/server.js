import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ROUTER } from "./config/server.config.js";
import { UserRouter } from "./routes/user.route.js";
import { MovieRouter } from "./routes/movie.route.js";
import { v2 as cloudinary } from "cloudinary";
import { PORT, DB } from "./config/dotenv.js";

cloudinary.config({
  cloud_name: "dj6hobxmb",
  api_key: "953964133121683",
  api_secret: "4LbktCuPmCljlvOsc9WkwRxEJc0",
});

const app = express();

app.use(express.json());

app.use(cors());

app.use(ROUTER.USER.CONTEXT_PATH, UserRouter);
app.use(ROUTER.MOVIES.CONTEXT_PATH, MovieRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB.USER_NAME}:${DB.PASS_WORD}@cluster0.3zxi5qw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connect successfully!");
    app.listen(PORT || 8080, () => {
      console.log(`Server is running at port ${PORT || 8080}`);
    });
  } catch (error) {
    console.log("Error while connect db!!!");
    console.error({ message: error.message });
  }
};
connectDB();

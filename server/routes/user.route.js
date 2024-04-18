import express from 'express';
import { UserController } from '../controller/user.controller.js';
import verifyToken from '../middleware/verifyToken.middleware.js';


const UserRouter = express.Router();


UserRouter.get("/check", verifyToken, UserController.checkLoginState)

UserRouter.post("/register", UserController.register)

UserRouter.post("/login", UserController.login)








export  {UserRouter} 
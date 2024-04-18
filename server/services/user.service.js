import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/dotenv.js";

const salt = await bcrypt.genSalt(10);




const checkLoginState = async(userId) => {
  const user = await UserModel.findById(userId).select('-passWord')

  if(!user){
    throw new Error({success: false})
  }

  return  {success: true, user: user};
}

const register = async (user) => {
  const currentUser = await UserModel.findOne({ userName: user.userName });
  if (currentUser) {
    throw new Error("User is exits!");
  }

  const hashPass = await bcrypt.hash(user.passWord, salt);

  const newUser = new UserModel({
    userName: user.userName,
    passWord: hashPass,
  });

  await newUser.save();

  return { success: true, user: newUser };
};

const login = async (user) => {
  const currentUser = await UserModel.findOne({ userName: user.userName });

  if (!currentUser) {
    throw new Error("User is not exits!");
  }

  const checkPass = await bcrypt.compare(user.passWord, currentUser.passWord);

  if (!checkPass) {
    throw new Error("Invalid userName and/or passWord!");
  }


  const accessToKen = jwt.sign(
    {userId: currentUser._id},
    SECRET_KEY,
    {expiresIn: "1d"}

  )


  return { success: true, access_token: accessToKen};
};

export const UserService = {
  register,
  login,
  checkLoginState
};

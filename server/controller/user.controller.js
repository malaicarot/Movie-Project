import { UserService } from "../services/user.service.js";




const checkLoginState = async(req, res) =>{
    try {
       const userId = req.userId;

       res.json(await UserService.checkLoginState(userId))
       
    } catch (error) {
      
       console.log('Error while check!');
       res.json({success: false, msg: error.message});
    }
 }


const register = async (req, res) => {
    try {
        const user = req.body;

        if(!user) {
            throw new Error('Undefine userName and/or passWord!!');
        }
        res.json(await UserService.register(user));
        
    } catch (error) {
        console.log('Error while register!');
      res.json({success: false, message: error.message});
    }
}



const login = async (req, res) => {
    try {
        const user = req.body;

        if(!user) {
            throw new Error('Undefine userName and/or passWord!!');
        }
        res.json(await UserService.login(user));
        
    } catch (error) {
        console.log('Error while register!');
      res.json({success: false, message: error.message});
    }
}


export const UserController = {
    register,
    login,
    checkLoginState
}
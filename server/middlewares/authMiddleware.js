// with the help of token, we can protect any routes. Now, we will create middleware to compare the token, if token match, then that route will be show and hence, that route will get protected.

import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base
export const requireSignIn = async (req, res, next) => {
  // here, req, res and next is the object or input of function. when we GET the <req>, then the <next> will validate and then after <res> will send.
  try {
    // <verify> is a function for encrypting and comparison between token and decode key(i.e, process.env.JWT_SECRET_KEY)
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY 
    ); // we get token inside the <req.headers.authorization>
    req.user=decode; //decrypt the user
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in requireSignin middleware",
      error,
    });
  }
};

// admin access OR middleware for admin
export const isAdmin =async(req,res,next)=>{
  try{
    const user =await userModel.findById(req.user._id);
    if(user.role !=1){
      return res.status(401).send({
        success:false,
        message: "UnAuthorized Access",
      });
    }
    else{
      next();
    }
  }
  catch(error){
    console.log(error);
    res.status(401).send({
      success:false,
      message :"error in admin middleware",
      error,
    })
  }
}


// with the help of this middleware we can protect any routes.

require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require('../models/users');
const {loginValidation} = require("../validation/validation")
const expressAsyncHandler = require('express-async-handler');


const handleRegister = expressAsyncHandler(async (req, res) => {
  //   console.log(req.body);
  //Check if user already exists
  const userExist = await Users.findOne({ email: req?.body?.email });
  if(userExist) throw new Error('User already exists')
      try {
          const user = await Users.create({
              fullName:req?.body?.fullName,
              email:req?.body?.email,
              phone:req?.body?.phone,
              adress:req?.body?.adress,
              password:req?.body?.password,
              role: {name:req.body.role}
          })
          res.status(200).json(user);
      } catch (error) {
      res.json(error);
      }
      
    })

//HandlLogin//////////////////////////////////////////////////
const handleLogin = async (req,res) =>{

//Validation Data
const {error} = loginValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//checking if the email exists
const user = await Users.findOne({email:req.body.email})
if(!user) return res.status(400).send('Email is not found');

//Password is Correct
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send("Invalid Password");

//create and assign a token
const token = jwt.sign({_id: user._id,role:user.role},process.env.TOKEN_SECRET)
const { _id, fullName, email, role } = user;
res.status(200).json({
  token,
  user: { _id, fullName, email, role},
});
  
}

// const handleLogin = expressAsyncHandler(async (req, res) => {
//   const{email,password} = req.body;
//   //Check if user already exists
//   const user = await Users.findOne({ email });

//   //check if passowrd is correct
//   if(user && (await user.isPasswordMatched(password))){
//       res.json({
         
//           email:user?.email,
//           password:user?.password
          
//       })
//   }else{
//       res.status(404)
//       throw new Error('Login failed');
//   }
// });

const handleLogout = (req,res) =>{
  res.send('logout')
}


module.exports = {
  handleRegister,
  handleLogin,
  handleLogout
}
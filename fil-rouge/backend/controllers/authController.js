require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require('../models/users');
const {registerValidation,loginValidation} = require("../validation/validation")



//HandlRegister///////////////////////////////////////////////////
const handleRegister = async (req,res) =>{

//Validation Data
const {error} = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//checking if the user is already in the database 
const emailExist = await Users.findOne({email:req.body.email})
if(emailExist) return res.status(400).send('Email already exists');

//HASH paswords
const salt = await bcrypt.genSalt(10);
const hashedpassword = await bcrypt.hash(req.body.password, salt);

// Create a new user
  const user = new Users({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    adress: req.body.adress,
    password: hashedpassword,
    confirm_password: req.body.repaeat_password,
    role: {name:req.body.role}
  });
  try{
    const saveUser = await user.save();
    res.send({ user: user._id});

  }catch(err){
    res.status(400).send(err)
  }

};



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

const handleLogout = (req,res) =>{
  res.send('logout')
}


module.exports = {
  handleRegister,
  handleLogin,
  handleLogout
}
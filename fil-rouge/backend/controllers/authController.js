require('dotenv').config();
const jwt = require("jsonwebtoken");
const Users = require('../models/users');

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const handleRegister = async (req, res) => {
  Users.findOne({email: req.body.email})
  .exec((error, user) => {
    if(user) return res.status(400).json({
      message: 'User already registered'
    })

    const {
      fullName,
      email,
      password,
      phone,
      adress,
      // role
    } = req.body

    const _user = new Users({
       fullName,
       email, 
       password, 
       phone, 
       adress,
      //  role
      })
      _user.save((error, user) => {
        if(error) {
          return res.status(400).json({
            message : 'Someting wwent wrong'
          })
        }
        if(user) {
          return res.status(201).json({
            user: 'User Created Successfully...!'
          })
        }
      })
  })

    
}


//HandlLogin//////////////////////////////////////////////////
const handleLogin = async (req,res) =>{

    Users.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword && user.role === "user") {
          const token = generateJwtToken(user._id, user.role);
          const { _id, fullName, email, role, phone, adress } = user;
          res.status(200).json({
            token,
            user: { _id, fullName, email, role, phone, adress},
          });
        } else if (isPassword && user.role === "admin") {
          const token = generateJwtToken(user._id, user.role);
          const { _id, fullName, email, role, phone, adress } = user;
          res.status(200).json({
            token,
            user: { _id, fullName, email, role, phone, adress},
          });

        }else{return res.status(400).json({
            message: "Something went wrong",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
  };

const handleLogout = (req,res) =>{
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
}
  



module.exports = {
  handleRegister,
  handleLogin,
  handleLogout
}
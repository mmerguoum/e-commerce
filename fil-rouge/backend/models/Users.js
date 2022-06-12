const mongoose  = require("mongoose");


//create Role schema
const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
})

// create Users schema
const userschema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true,
    min: 6,
    max:255
  },
  email:{
    type: String,
    required: true,
    min: 6,
    max:255
  },
  phone:{
    type:Number,
    required:true,
  },
  adress:{
    type:String,
    required: false
  },
  password: {
    type: String,
    required: true,
    max:1024,
    min:6
  },
  history: {
    type: Array,
    default: []
  },
  role: RoleSchema

}, {
  timestamps: true
})



module.exports = mongoose.model('User',
userschema);
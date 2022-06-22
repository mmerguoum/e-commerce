const mongoose  = require("mongoose");
const bcryptjs = require('bcryptjs')
// console.log(mongoose.isValidObjectId())


// create Users schema
const userSchema = new mongoose.Schema({

  fullName:{
    type: String,
    required: true,
    min: 6,
    max:255
  },
  email:{
    type: String,
    required: true,
    trim: true,
    min: 6,
    max:255,
    unique: true,
    lowercase: true
  },
  phone:{
    type:Number,
    required:true,
  },
  adress:{
    type:String,
    required: false
  },
  hash_password: {
    type: String,
    required: true,
    max:1024,
    min:6
  },
  history: {
    type: Array,
    default: [] 
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "admin"
  }

}, {
  timestamps: true
})



userSchema.virtual('password')
.set(function(password){
  this.hash_password = bcryptjs.hashSync(password, 10);
})

userSchema.methods = {
  authenticate: function(password){
    return bcryptjs.compareSync(password, this.hash_password)
  }
}

module.exports = mongoose.model('User', userSchema);
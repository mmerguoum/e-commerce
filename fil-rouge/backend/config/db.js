// const mongoose = require('mongoose');
// // const config = require('config');
// const URI_db = "mongodb://127.0.0.1/artShop";

// const connectDB = () => {
//     mongoose.connect(URI_db,{

  
//     }).then(()=>console.log('connected to databases...'))
//     .catch((error)=>console.log('Error'+error))
// }
// module.exports = connectDB 

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
     
    })

    console.log('connected to databases...')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    
  }
}

module.exports = connectDB
const mongoose = require('mongoose');
// const config = require('config');
const URI_db = "mongodb://127.0.0.1/artShop";

const connectDB = async () => {

        try{
            await mongoose.connect(URI_db);
            console.log('MongoDB connected ...');
        }
        catch(error){

                console.log(error.message);
                process.exit(1);
        }
}

module.exports = connectDB;
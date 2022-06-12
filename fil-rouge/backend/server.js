const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();
const __PORT__ = process.env.PORT || 5000;

app.use(cors())

// import Routes
const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/categories') 
const userRoute = require('./routes/user')

/**
 * Connecting DB
 */
connectDB();
/**
 * Init middleware
 */
app.use(express.json({extended:false}));
app.get('/',(req,res) => {

       res.send(`API Runing welcome ${process.env.APP_NAME}`);
})
/**
 * define routes
 */
app.use('/api/users', authRoute);
app.use('/api/category', categoryRoute)
app.use('/api/profile', userRoute)




app.listen(__PORT__,() => {

      console.log( `Server Started on ${__PORT__} welcome ${process.env.NAME}
      `);
});
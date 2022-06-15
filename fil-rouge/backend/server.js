const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser') //? The will let us get data the data form post
const cors = require('cors')

dotenv.config()


const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/categories') 
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')


// /**
//  * Connecting DB
//  */
connectDB()

const app = express()

//* the will let us get data the data form post
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());
app.use(cookieParser());


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


// /**
//  * define routes
//  */
app.use('/api/users', authRoute);
app.use('/api/category', categoryRoute)
app.use('/api/profile', userRoute)
app.use('/api/product', productRoute)


// app.get('/api/config/paypal', (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// )





const PORT = process.env.PORT || 5000



app.listen(PORT,() => {

      console.log( `Server Started on ${PORT} welcome ${process.env.NAME}
      `);
});



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
const cartRoute =require('./routes/cart')

const PORT = process.env.PORT || 5000

// /**
//  * Connecting DB
//  */
connectDB()

const app = express()
app.use(cookieParser());



//* the will let us get data the data form post
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

// app.use(fileUpload({
//   useTempFiles: true,
// }));


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


// /**
//  * define routes
//  */
app.use('/api/auth', authRoute);
app.use('/api/category', categoryRoute)
app.use('/api/users', userRoute)
app.use('/api/product', productRoute)
app.use('/api/cart', cartRoute)






app.listen(PORT,() => {

      console.log( `Server Started on ${PORT} welcome ${process.env.NAME}
      `);
});



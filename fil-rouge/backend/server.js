const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser') //? The will let us get data the data form post
// const fileUpload = require('express-fileupload')
// const multer = require('multer')
// const Products = require('./models/products')
const cors = require('cors')

dotenv.config()


const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/categories') 
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
// const uploadRoute =require('./routes/upload')


// /**
//  * Connecting DB
//  */
connectDB()

const app = express()
 

//* the will let us get data the data form post
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
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
// app.use('/api/upload', uploadRoute)



const PORT = process.env.PORT || 5000



app.listen(PORT,() => {

      console.log( `Server Started on ${PORT} welcome ${process.env.NAME}
      `);
});



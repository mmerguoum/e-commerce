const express = require('express')
const { createProduct } = require('../controllers/productController') 
const multer = require('multer');
const path = require('path')



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), './images'));
    },
    filename: function (req, file, cb) {
        cb(null,  file.originalname)
      }
  })
  const Upload= multer({storage})


const router = express.Router()

router.post('/create',Upload.single('image'),createProduct)

module.exports = router 
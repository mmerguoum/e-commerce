const express = require('express')
const multer = require('multer') 
const shortid = require("shortid");
const path = require('path')
const {
    createProduct,
    showOneProduct, 
    removeProduct, 
    updateProduct, 
    getAllProducts,
    productSearch } = require('../controllers/productController') 

  

const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads') );
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });

  
router.post('/create', upload.array("productPictures"), createProduct)
router.get('/getAll',getAllProducts)
router.put('/:id', updateProduct)
router.delete('/:productId', removeProduct)
router.get('/:productId', showOneProduct) 
router.get('/search/:key', productSearch)



module.exports = router 
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

    const { requireSignin,
            userMiddleware,
            isAdmin } = require('../middleware/auth')

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

  
router.post('/create', requireSignin, isAdmin, upload.array("productPictures"), createProduct)
router.get('/getAll',requireSignin,getAllProducts)
router.put('/:id', requireSignin, isAdmin, updateProduct)
router.delete('/:productId', requireSignin, isAdmin, removeProduct)
router.get('/:productId', requireSignin, userMiddleware, showOneProduct) 
router.get('/search/:key', requireSignin, userMiddleware, productSearch)



module.exports = router 
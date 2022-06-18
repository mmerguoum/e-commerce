const express = require('express')
const {
     createProduct,
    showOneProduct, 
    removeProduct, 
    updateProduct, 
    getAllProducts,
    productSearch } = require('../controllers/productController') 
    const multer = require('multer')
    const upload = multer();
    

    // upload.fields([{ name: 'image', maxCount: 1 }]),
const router = express.Router()
// ,Upload.single('image')
router.post('/create',  createProduct)
router.get('/getAll', getAllProducts)
router.put('/:productId', updateProduct)
router.delete('/:productId', removeProduct)
router.get('/:productId', showOneProduct) 
router.get('/search/:key', productSearch)
// router.put('/:productIduserId', putProduct)




module.exports = router 
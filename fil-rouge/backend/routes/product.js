const express = require('express')
const {
     createProduct,
    showOneProduct, 
    removeProduct, 
    putProduct, 
    getAllProducts,
    searchProduct } = require('../controllers/productController') 
    const multer = require('multer')
    const upload = multer();
    


const router = express.Router()
// ,Upload.single('image')
router.post('/create', upload.fields([{ name: 'image', maxCount: 1 }]), createProduct)
router.get('/getAll', getAllProducts)
router.get('/:productId', showOneProduct) 
router.delete('/:productId', removeProduct)
router.put('/:productId', putProduct)
router.get('/search/:key', searchProduct)
// router.put('/:productIduserId', putProduct)




module.exports = router 
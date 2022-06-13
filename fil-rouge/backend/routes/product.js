const express = require('express')
const { createProduct, showOneProduct, removeProduct, putProduct } = require('../controllers/productController') 



const router = express.Router()
// ,Upload.single('image')
router.post('/create',createProduct)
router.get('/:productId', showOneProduct)
router.delete('/:productId', removeProduct)
router.put('/:productId', putProduct)
// router.put('/:productIduserId', putProduct)




module.exports = router 
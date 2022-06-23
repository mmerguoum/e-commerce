const express = require('express')
const { addItemToCart } = require('../controllers/cartController') 


const router = express.Router()

router.post('/addtocart',addItemToCart)




module.exports = router
const express = require('express')

const { createCategory, removeCategory, getAllCategories } = require('../controllers/categoryController') 


const router = express.Router()

router.post('/create',createCategory)
router.get('/getAll',getAllCategories)
router.delete('/:categoryId',removeCategory)



module.exports = router
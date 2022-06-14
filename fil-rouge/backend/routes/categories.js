const express = require('express')

const { createCategory, removeCategory, putCategory } = require('../controllers/categoryController') 


const router = express.Router()

router.post('/create',createCategory)
router.delete('/:categoryId',removeCategory)
router.put('/:categoryId',putCategory)

module.exports = router
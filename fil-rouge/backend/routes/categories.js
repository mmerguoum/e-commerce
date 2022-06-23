const express = require('express')
const { createCategory,
        removeCategory,
        getAllCategories } 
        = require('../controllers/categoryController') 

const { requireSignin,
        isAdmin } = require('../middleware/auth')

const router = express.Router()

router.post('/create', requireSignin, isAdmin, createCategory)
router.get('/getAll', requireSignin, isAdmin, getAllCategories)
router.delete('/:categoryId', requireSignin, isAdmin, removeCategory)



module.exports = router
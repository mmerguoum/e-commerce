const express = require('express')
const { showOneUser, getAllUser, updateUser, removeUser, searchUser, createUser } = require('../controllers/userController')

const { requireSignin,
        isAdmin } = require('../middleware/auth')

const   router = express.Router()
router.get('/getUser', requireSignin, isAdmin, getAllUser)
router.post('/create', requireSignin, isAdmin, createUser) 
router.put('/:userId', requireSignin, isAdmin, updateUser)
router.get('/:userId', requireSignin, isAdmin, showOneUser)
router.delete('/:userId', requireSignin, isAdmin, removeUser)
router.get('/search/:key', requireSignin, isAdmin, searchUser)




module.exports = router;
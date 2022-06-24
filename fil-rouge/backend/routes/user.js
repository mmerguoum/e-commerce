const express = require('express')
const { showOneUser, getAllUser, updateUser, removeUser, searchUser, createUser,refreshToken } = require('../controllers/userController')


const   router = express.Router()
router.get('/getUser', getAllUser)
router.post('/create', createUser) 
router.put('/:userId', updateUser)
router.get('/:userId', showOneUser)
router.delete('/:userId', removeUser)
router.get('/search/:key', searchUser)




module.exports = router;
const express = require('express')
const { showOneUser, getAllUser, updateUser, removeUser, searchUser } = require('../controllers/userController')


const   router = express.Router()
router.get('/getUser', getAllUser)
router.put('/:userId', updateUser)
router.get('/:userId', showOneUser)
// router.get('/:userId', showOneUser) 
router.delete('/:userId', removeUser)
router.get('/search/:key', searchUser)




module.exports = router;
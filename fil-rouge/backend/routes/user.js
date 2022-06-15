const express = require('express')
const { showOneUser } = require('../controllers/userController')



const router = express.Router()

router.get('/:userId', showOneUser)
router.get('/getAll', getAllUsers)
router.get('/:userId', showOneUser) 
router.delete('/:userId', removeUser)
router.put('/:userId', updateUser)
router.get('/search/:key', searchUser)



module.exports = router;
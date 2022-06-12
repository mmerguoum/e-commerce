const express = require('express')
const { getOneUser } = require('../controllers/userController')
const { userById } = require('../middleware/user')



const router = express.Router()

router.get('/:userId', getOneUser)
router.param('userId', userById)


module.exports = router;
const User = require('../models/users')



exports.showOneUser = async(req, res) => {
    const user = await User.findById(req.params.userId)
    if(user) {
        res.send(user)
    }else{
        res.status(404).send({message: 'Product Not Persist'})
    }
}


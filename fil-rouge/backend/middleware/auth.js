const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.isLogin = (req, res, next) => { // check if token valid
    var token = req.header('Authorization')

    try {
        req.user = jwt.verify(token, SCRT_TOKEN)
        next()
    } catch (error) {
        res.status('401').json({ message: 'You are not Authorized' })
    }
}




exports.isAdmin = (req, res, next) => {

    if(req.auth.role == admin) {
        if(req.user.admin){
            next();
        }else{
            return res.status(403).json({
                error: "Admin Resource, Access Denied !"
        })
    
        }
    }

}
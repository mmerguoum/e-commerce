const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.requireSignin = async (req, res, next) => {

  const token = req.headers.token
  const user = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log('tokennnnnnnnnn', token)

  req.tokenData = await { id: user._id, role: user.role };
  if (!token) {
    res.status(401).json({ error: "no token found" })
  } else {
    try {
      const user = jwt.verify(token, process.env.TOKEN_SECRET);
      req.tokenData = await { id: user._id, role: user.role };

      next()
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
};


// exports.requireSignin = (req, res, next) => {
//     if (req.headers.authorization) {
//       const token = req.headers.authorization.split(" ")[1];
//       const user = jwt.verify(token, process.env.TOKEN_SECRET);
//       req.user = user;
//     } else {
//       return res.status(400).json({ message: "Authorization required" });
//     }
//     next();
//   };

exports.userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User access denied" });
  }
  next();
};


exports.isAdmin = (req, res, next) => {

  if (req.auth.role == admin) {
    if (req.user.admin) {

      next();
    } else {
      return res.status(403).json({
        error: "Admin Resource, Access Denied !"
      })

    }
  }

}





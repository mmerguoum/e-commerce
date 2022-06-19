const jwt = require('jsonwebtoken');
require('dotenv').config();
const multerS3 = require("multer-s3");
const multer = require('multer') 
const aws = require("aws-sdk");

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = user;
    } else {
      return res.status(400).json({ message: "Authorization required" });
    }
    next();
  };

  exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== "user") {
      return res.status(400).json({ message: "User access denied" });
    }
    next();
  };
  
  exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {     
        return res.status(400).json({ message: "Admin access denied" });

    }
    next();
  };



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;

const s3 = new aws.S3({
  accessKeyId,
  secretAccessKey,
});

exports.upload = multer({ storage });

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "flipkart-clone-app",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  }),
});




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
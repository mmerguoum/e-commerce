const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");



router
.route("/register")
.post(authController.handleRegister);

router
.route("/login")
.post(authController.handleLogin);

router
.route("/logout")
.post(authController.handleLogout);





module.exports = router;
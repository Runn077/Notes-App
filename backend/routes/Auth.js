const express = require("express");
const router = express.Router();
require('dotenv').config();
const authController = require('../controller/authController')
const { verifyToken } = require("../middleware/verifyKey");

// get
router.get("/logout", authController.logoutGet);

router.get("/me", verifyToken, (req, res) => {
	res.status(200).json({ id: req.user.id, username: req.user.username });
});

// post
router.post("/refresh", authController.refreshPost);

router.post("/register", authController.registerPost);

router.post("/login", authController.loginPost);

module.exports = router;
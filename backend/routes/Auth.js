const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config();
const verifyToken = require('../middleware/verifyKey')
const authController = require('../controller/authController')

// post
router.post("/refresh", authController.refreshPost);

router.post("/register", authController.registerPost);

router.post("/login", authController.loginPost);

module.exports = router;
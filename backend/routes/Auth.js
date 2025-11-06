const express = require("express");
const router = express.Router();
const { Users } = require("../models")
const jwt = require("jsonwebtoken")

// post
router.post("/register", async (req, res) => {
    const user = await Users.create(req.body);
    res.json(user);
});

router.post("/login", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    res.send("/login endpoint")
})

// router.get("/me")

module.exports = router;
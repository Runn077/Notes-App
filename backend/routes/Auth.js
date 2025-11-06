const express = require("express");
const router = express.Router();
const { Users } = require("../models")
const jwt = require("jsonwebtoken")

// post
router.post("/register", async (req, res) => {
    try {
        const {username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }
        const existingUser = await Users.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }

        const newUser = await Users.create({ username, password });
        res.status(201).json({ message: "User registered successfully", user: newUser });
        
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body
    const user = await Users.findOne({ where: { username} });
})

// router.get("/me")

module.exports = router;
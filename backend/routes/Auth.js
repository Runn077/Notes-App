const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// post
router.post("/register", async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }
        const existingUser = await Users.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }

        const newUser = await Users.create({ username, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully", user: newUser });
        
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await Users.findOne({ where: {username} });

        if (!user){
            return res.status(400).json({error: "Username or password is incorrect"})
        }

        const validatePassword = await bcrypt.compare(password, user.password)
        if (!validatePassword) {
            return res.status(400).json({ error: "Password is incorrect" });
        }
        
        const accessToken = jwt.sign({
            id: user.id, 
            username: user.username,
        }, "SeceretKey");
        
        res.json({
            id: user.id, 
            username: user.username,
            accessToken,
        })

    } catch (error){
        console.error(error)

    }    
})

// router.get("/me")

module.exports = router;
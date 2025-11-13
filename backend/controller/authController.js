const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config();

const generateAccessToken = (user) =>{
    return jwt.sign({
        id: user.id, 
        username: user.username,
    }, process.env.JWT_KEY, { expiresIn: '1h' });
}

// post
module.exports.refreshPost = (req, res) => {
    const refreshToken = req.body.token

    if (!refreshToken) {
        return res.status(401).json("You are not authenticated")
    }
};


module.exports.registerPost = async (req, res) => {
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

        // cookies
        const token = generateAccessToken(newUser);
        res.cookie('jwt', token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24})
        
        res.status(201).json({ message: "User registered successfully", user: newUser });
        
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
};

module.exports.loginPost = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await Users.findOne({ where: {username} });

        if (!user){
            return res.status(400).json({error: "Username or password is incorrect"})
        }

        const validatePassword = await bcrypt.compare(password, user.password)
        if (!validatePassword) {
            return res.status(400).json({ error: "Username or password is incorrect" });
        };
        
        const accessToken = generateAccessToken(user);
        
        res.cookie('jwt', accessToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24});
        res.status(200).json({message: "Login successful", user: user});

    } catch (error){
        console.error(error)
    };    
};

module.exports.logoutGet = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({message: "Logout successful"});
}
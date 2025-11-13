const jwt = require("jsonwebtoken");
require('dotenv').config();
const { Users } = require("../models");

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.status(401).json({error: "Token is not valid"});
            } else {
                console.log(decodedToken)
                req.user = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ error: "You are not authenticated" });
    }
}

const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        res.locals.user = null;
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const user = await Users.findByPk(decodedToken.id);
        res.locals.user = user;
        next();
    } catch (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
    }
};

module.exports = {verifyToken, checkUser};
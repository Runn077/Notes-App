require('dotenv').config();
const express = require('express');
const app = express();
const db = require("./models");
const cors = require("cors");
const sequelize = require('./models').sequelize;
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3010', 
  credentials: true,               
}));

const notesRouter = require("./routes/Notes");
app.use("/notes", notesRouter);

const authRouter = require("./routes/Auth")
app.use("/auth", authRouter);

const port = process.env.PORT
db.sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log("Server Running on Port: " + port);
    });
})

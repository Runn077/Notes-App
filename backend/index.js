require('dotenv').config();
const express = require('express');
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(cors())
app.use(express.json());

const notesRouter = require("./routes/Notes");
app.use("/notes", notesRouter);

const port = process.env.PORT
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server Running on Port: " + port);
    });
})

const express = require("express");
const router = express.Router();
const { Notes } = require("../models")

router.get("/", async (req, res) => {
    const listOfNotes = await Notes.findAll();
    res.json(listOfNotes);
});

router.post("/", async (req, res) => {
    const note = req.body;
    await Notes.create(note);
    res.json(note);
});

module.exports = router;
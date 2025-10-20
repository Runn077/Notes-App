const express = require("express");
const router = express.Router();
const { Notes } = require("../models")

// get
router.get("/", async (req, res) => {
    const listOfNotes = await Notes.findAll();
    res.json(listOfNotes);
});

router.get("/:id", async (req, res) =>{
    const note = await Notes.findByPk(req.params.id)
    res.json(note);
})

// post
router.post("/", async (req, res) => {
    const note = req.body;
    await Notes.create(note);
    res.json(note);
});

// put
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const {title, postBody} = req.body; // The updated data
    
    await Notes.update(
      { title, postBody },     // values to update
      { where: { id: id } }    // condition
    );
    
    const updatedNote = await Notes.findByPk(id);
    res.json(updatedNote);

})

module.exports = router;
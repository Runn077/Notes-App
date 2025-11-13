const express = require("express");
const router = express.Router();
const { Notes } = require("../models");
const { verifyToken } = require("../middleware/verifyKey");
const { checkUser } = require("../middleware/verifyKey");
router.use(checkUser);

// get
router.get("/", verifyToken ,async (req, res) => {
    const listOfNotes = await Notes.findAll({ where: { userId: req.user.id } });
    res.json(listOfNotes);
});

router.get("/:id", verifyToken, async (req, res) =>{
    const note = await Notes.findOne({
        where: { id: req.params.id, userId: req.user.id }
    });
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.json(note);
})

// post
router.post("/", verifyToken, async (req, res) => {
    const note = await Notes.create({
        ...req.body,
        userId: req.user.id
    });
    res.json(note);
});

// put
router.put("/:id", verifyToken, async (req, res) => {
    const id = req.params.id;
    const {title, postBody} = req.body; // The updated data
    
    await Notes.update(
        { title, postBody },
        { where: { id: id, userId: req.user.id } }
    );
    
    const updatedNote = await Notes.findByPk(id);
    res.json(updatedNote);

})

// delete
router.delete("/:id", verifyToken, async (req, res) => {
    const id = req.params.id;
    await Notes.destroy({ where: { id: id, userId: req.user.id } });
    res.send("Delete is Successfull")
})

module.exports = router;
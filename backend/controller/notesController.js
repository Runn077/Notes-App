const { Notes } = require("../models");

// GET all notes for the logged-in user
module.exports.getAllNotes = async (req, res) => {
  try {
    const listOfNotes = await Notes.findAll({ where: { userId: req.user.id } });
    res.json(listOfNotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET a single note by ID
module.exports.getNoteById = async (req, res) => {
  try {
    const note = await Notes.findOne({
      where: { id: req.params.id, userId: req.user.id }
    });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// POST create a new note
module.exports.createNote = async (req, res) => {
  try {
    const note = await Notes.create({
      ...req.body,
      userId: req.user.id
    });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// PUT update a note
module.exports.updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, postBody } = req.body;
    
    await Notes.update(
      { title, postBody },
      { where: { id: id, userId: req.user.id } }
    );
    
    const updatedNote = await Notes.findByPk(id);
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE a note
module.exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    await Notes.destroy({ where: { id: id, userId: req.user.id } });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

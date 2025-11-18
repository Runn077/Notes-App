const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyKey");
const { checkUser } = require("../middleware/verifyKey");
const notesController = require("../controller/notesController");

router.use(checkUser);

// GET all notes
router.get("/", verifyToken, notesController.getAllNotes);

// GET a single note by ID
router.get("/:id", verifyToken, notesController.getNoteById);

// POST create a new note
router.post("/", verifyToken, notesController.createNote);

// PUT update a note
router.put("/:id", verifyToken, notesController.updateNote);

// DELETE a note
router.delete("/:id", verifyToken, notesController.deleteNote);

module.exports = router;
import * as NotesController from "../controllers/notes"
import express from "express";

const router = express.Router();

router.get("/", NotesController.getNotes);

router.get("/:title", NotesController.getNote);

router.patch("/:noteId", NotesController.updateNote);

router.post("/", NotesController.createNote);

router.delete('/:noteId', NotesController.deleteNote);
export default router;
import { Router } from "express";
import { AddNoteController } from "./controllers/AddNoteController";

const router = Router();

router.post("/note/create", new AddNoteController().handle);

export { router };

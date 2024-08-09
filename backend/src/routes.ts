import { Router } from "express";
import { AddNoteController } from "./controllers/AddNoteController";
import { ListNoteController } from "./controllers/ListNoteController";
import { DeleteNoteController } from "./controllers/DeleteNoteController";

const router = Router();

router.post("/note/create", new AddNoteController().handle);
router.get("/note/list", new ListNoteController().handle);
router.delete("/note/delete", new DeleteNoteController().handle);

export { router };

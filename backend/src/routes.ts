import { Router } from "express";
import { AddNoteController } from "./controllers/AddNoteController";
import { ListNoteController } from "./controllers/ListNoteController";
import { DeleteNoteController } from "./controllers/DeleteNoteController";
import { EditNoteController } from "./controllers/EditNoteController";

const router = Router();

router.post("/note/create", new AddNoteController().handle);
router.get("/note/read", new ListNoteController().handle);
router.put("/note/update/:id", new EditNoteController().handle);
router.delete("/note/delete/:id", new DeleteNoteController().handle);


export { router };

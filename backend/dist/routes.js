"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateNoteController_1 = require("./controllers/CreateNoteController");
const ReadNoteController_1 = require("./controllers/ReadNoteController");
const DeleteNoteController_1 = require("./controllers/DeleteNoteController");
const UpdateNoteController_1 = require("./controllers/UpdateNoteController");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/note/create", new CreateNoteController_1.CreateNoteController().handle);
router.get("/note/read", new ReadNoteController_1.ReadNoteController().handle);
router.put("/note/update/:id", new UpdateNoteController_1.UpdateNoteController().handle);
router.delete("/note/delete/:id", new DeleteNoteController_1.DeleteNoteController().handle);
//# sourceMappingURL=routes.js.map
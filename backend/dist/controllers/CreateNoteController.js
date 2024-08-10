"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteController = void 0;
const CreateNoteService_1 = require("../services/CreateNoteService");
class CreateNoteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, note, favorite, color } = request.body;
            const createNote = new CreateNoteService_1.CreateNoteService();
            const notes = yield createNote.execute({
                id,
                title,
                note,
                favorite,
                color
            });
            if (notes) {
                return response.status(201).json(notes);
            }
            else {
                return response.status(404).send();
            }
        });
    }
    ;
}
exports.CreateNoteController = CreateNoteController;
;
//# sourceMappingURL=CreateNoteController.js.map
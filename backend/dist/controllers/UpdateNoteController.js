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
exports.UpdateNoteController = void 0;
const UpdateNoteService_1 = require("../services/UpdateNoteService");
class UpdateNoteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { title, note, favorite, color } = request.body;
            const updateNote = new UpdateNoteService_1.UpdateNoteService();
            const notes = yield updateNote.execute({
                id,
                title,
                note,
                favorite,
                color
            });
            if (notes) {
                return response.status(204).json(notes);
            }
            else {
                return response.status(404).send();
            }
        });
    }
    ;
}
exports.UpdateNoteController = UpdateNoteController;
;
//# sourceMappingURL=UpdateNoteController.js.map
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
exports.DeleteNoteController = void 0;
const DeleteNoteService_1 = require("../services/DeleteNoteService");
class DeleteNoteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const deleteNoteService = new DeleteNoteService_1.DeleteNoteService();
            const notes = yield deleteNoteService.execute({ id });
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
exports.DeleteNoteController = DeleteNoteController;
;
//# sourceMappingURL=DeleteNoteController.js.map
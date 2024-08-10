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
exports.ReadNoteController = void 0;
const ReadNoteService_1 = require("../services/ReadNoteService");
class ReadNoteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const readNoteService = new ReadNoteService_1.ReadNoteService();
            const listNotes = yield readNoteService.execute();
            if (listNotes) {
                return response.status(200).json(listNotes);
            }
            else {
                return response.status(404).send();
            }
        });
    }
    ;
}
exports.ReadNoteController = ReadNoteController;
;
//# sourceMappingURL=ReadNoteController.js.map
import { Request, Response } from "express";
import {DeleteNoteService} from '../services/DeleteNoteService'


class DeleteNoteController{
    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const deleteNoteService = new DeleteNoteService();

        const note = await deleteNoteService.execute({
            id
        });


        return res.json(note);

    }
}

export {DeleteNoteController}
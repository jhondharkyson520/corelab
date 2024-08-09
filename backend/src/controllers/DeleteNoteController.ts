import { Request, Response } from "express";
import {DeleteNoteService} from '../services/DeleteNoteService'


class DeleteNoteController{
    async handle(req: Request, res: Response){

        const { id } = req.params;

        const deleteNoteService = new DeleteNoteService();

        const notes = await deleteNoteService.execute({
            id
        });


        if( notes ){
            return res.status(204).json(notes);
            
        } else{
            return res.status(404).send();
        }

    }
}

export {DeleteNoteController}
import { Request, Response } from "express";
import { EditNoteService } from "../services/EditNoteService";

class EditNoteController{

    async handle(req: Request, res: Response){

        const {id} = req.params;
        const {title, note, favorite, color} = req.body;

        const updateNote = new EditNoteService();

        const notes = await updateNote.execute({
            id,
            title,
            note,
            favorite,
            color
        });

        if( notes ){
            return res.status(204).json(notes);
            
        } else{
            return res.status(404).send();
        }

    }

}

export {EditNoteController}
import { Request, Response } from "express";
import {AddNoteService} from '../services/AddNoteService' 

class AddNoteController{

    async handle(req: Request, res: Response){

        const {id, title, note} = req.body;

        const addNote = new AddNoteService();

        const order = await addNote.execute({
            id,
            title,
            note
        });

        return res.json(order);

    }

}

export {AddNoteController}
import { Request, Response } from "express";
import {AddNoteService} from '../services/AddNoteService' 

class AddNoteController{

    async handle(req: Request, res: Response){

        const {id, title, note, favorite, color} = req.body;

        const addNote = new AddNoteService();

        const order = await addNote.execute({
            id,
            title,
            note,
            favorite,
            color
        });

        return res.json(order);

    }

}

export {AddNoteController}
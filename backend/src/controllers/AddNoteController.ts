import { Request, Response } from "express";
import {AddNoteService} from '../services/AddNoteService' 

class AddNoteController{

    async handle(req: Request, res: Response){

        const {id, title, note, favorite, color} = req.body;

        const addNote = new AddNoteService();

        const notes = await addNote.execute({
            id,
            title,
            note,
            favorite,
            color
        });

        if( notes ){
            return res.status(201).json(notes);
            
        } else{
            return res.status(404).send();
        }

    }

}

export {AddNoteController}
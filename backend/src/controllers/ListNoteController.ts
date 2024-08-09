import { Request, Response } from "express";
import { ListNoteService } from "../services/ListNoteService";

class ListNoteController{
    async handle(req: Request, res: Response){

        const listNoteService = new ListNoteService();

        const notes = await listNoteService.execute();
        

        if( notes ){
            return res.status(200).json(notes);
            
        } else{
            return res.status(404).send();
        }

    }
}

export {ListNoteController}
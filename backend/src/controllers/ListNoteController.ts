import { Request, Response } from "express";
import { ListNoteService } from "../services/ListNoteService";

class ListNoteController{
    async handle(req: Request, res: Response){

        const listNoteService = new ListNoteService();

        const category = await listNoteService.execute();
        

        return res.json(category);

    }
}

export {ListNoteController}
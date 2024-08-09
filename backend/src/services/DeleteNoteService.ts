import prismaClient from "../prisma/client";

interface NoteRequest{
    id: string;
}

class DeleteNoteService{
    async execute({id}: NoteRequest){   
        
        const notes = await prismaClient.notes.delete({
            where: {
                id: id                
            }
        });

        return notes;

    }
}

export {DeleteNoteService};
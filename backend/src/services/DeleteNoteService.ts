import prismaClient from "../prisma/client";

interface NoteRequest{
    id: string;
}

class DeleteNoteService{
    async execute({id}: NoteRequest){        
        console.log('id: ', id);
        
        const notes = await prismaClient.notes.delete({
            where: {
                id: id                
            }
        })

        return notes;

    }
}

export {DeleteNoteService};
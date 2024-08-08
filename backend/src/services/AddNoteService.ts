import prismaClient from "../prisma/client";

interface NoteRequest{
    id: number;
    title: string;
    note: string;
}

class AddNoteService{
    async execute({ id, title, note }: NoteRequest){

        const notes = await prismaClient.notes.create({
            data: {
                id: id,
                title: title,
                note: note
            }
        });

        return notes;

    }
}

export {AddNoteService};
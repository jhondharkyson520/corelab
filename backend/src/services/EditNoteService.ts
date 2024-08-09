import prismaClient from "../prisma/client";

interface UpdateNoteRequest{
    id: string;
    title: string;
    note: string;
    favorite: boolean;
    color: string;
}

class EditNoteService{
    async execute({ id, title, note, favorite, color }: UpdateNoteRequest){


        const notes = await prismaClient.notes.update({
            where:{id},
            data: {
                title: title,
                note: note,
                favorite: favorite,
                color: color,
            }
        });

        return notes;

    }
}

export {EditNoteService};
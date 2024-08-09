import prismaClient from "../prisma/client";

class ListNoteService{
    async execute(){

        const notes = await prismaClient.notes.findMany({
            select: {
                id: true,
                title: true,
                note: true,
                favorite: true,
                color: true
            }
        })

        return notes;

    }
}

export {ListNoteService};
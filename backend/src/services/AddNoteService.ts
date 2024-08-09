import prismaClient from "../prisma/client";

interface NoteRequest{
    id: string;
    title: string;
    note: string;
    favorite: boolean;
    color?: string;
}

class AddNoteService{
    async execute({ id, title, note, favorite, color }: NoteRequest){

        const colorControler = () => {
            if(color){
                return color;
            } else{
                return 'FFFFFF';
            }
        }

        const notes = await prismaClient.notes.create({
            data: {
                id: id,
                title: title,
                note: note,
                favorite: favorite,
                color: colorControler(),
            }
        });

        return notes;

    }
}

export {AddNoteService};
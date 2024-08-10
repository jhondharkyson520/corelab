import prismaClient from "../prisma/client";

interface CreateNoteRequest{

    id: string;
    title: string;
    note: string;
    favorite: boolean;
    color?: string;

}

class CreateNoteService{

    async execute( { id, title, note, favorite, color }: CreateNoteRequest ){

        const colorControler = () => {

            if( color ){

                return color;

            } else{

                return 'FFFFFF';

            }

        };

        const createNotes = await prismaClient.notes.create({

            data: {

                id: id,
                title: title,
                note: note,
                favorite: favorite,
                color: colorControler()

            }

        });

        return createNotes;

    };

};

export { CreateNoteService };
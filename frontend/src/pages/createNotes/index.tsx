
import imgStarTransparent from '../../assets/icons/starTransparent.svg';
import imgStarYellow from '../../assets/icons/starYellow.svg';
import { useContext, useEffect, useState } from 'react';
import { createNote, getNotes } from '../../services/api';
import { toast } from 'react-toastify';
import NoteContext from '../../context/NoteContext';
import { ContainerMain, ContainerNote, ContainerTitle, InputTitle, SectionContainer, TextNote } from './styles';

function CreateNotes() {

    const { setNotesList } = useContext(NoteContext) || {};
    const [favorite, setFavorite] = useState(false);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const favoriteControl = (event: React.FormEvent) => {
        event.preventDefault(); 
        setFavorite(!favorite);
    };

    const handleSubmit = async () => {
        if(title === '' || note === '') {
            toast.warning("Preencha todos os campos!");
            return;
        }

        const newNote = {
          title,
          note,
          favorite,
        };
      
        try { 
            await createNote(newNote);

            if (setNotesList) {
                setNotesList((prevNotes: any) => [...prevNotes, newNote]);
              }

            toast.success('Nota criada');         
            setTitle('');
            setNote( '' );
            setFavorite( false );

        } catch (error) { 
            if(error instanceof Error) {
                toast.error(error.message);
              } else {
                toast.error('Erro ao cadastrar');
              }
        }
      };
      
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        if (e.key === 'Enter') {
          e.preventDefault(); 
          handleSubmit();
        }
    };

    useEffect(() => {
       getNotes();
    },[]);

  return (
    <SectionContainer>
        <ContainerMain>            
            <form onSubmit={handleSubmit}>                
                <ContainerTitle>                                   
                    <InputTitle 
                        type="text" 
                        placeholder="Título" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={handleKeyDown} 
                        required 
                    />
                    { !favorite 
                        ?
                        <button onClick={favoriteControl}>
                            <img src={imgStarTransparent} alt="" />
                        </button>
                        :
                        <button onClick={favoriteControl}>
                            <img  src={imgStarYellow} alt="" />
                        </button>
                    }
                </ContainerTitle>

                <hr />

                <ContainerNote>
                    <TextNote 
                        placeholder="Criar nota..." 
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        onKeyDown={handleKeyDown} 
                        required 
                    />
                </ContainerNote>
            </form>            
        </ContainerMain>
    </SectionContainer>
  )
}

export default CreateNotes;
import styled from 'styled-components';
import imgStarTransparent from '../../assets/icons/starTransparent.svg';
import imgStarYellow from '../../assets/icons/starYellow.svg';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { createNote, getNotes } from '../../services/api';
import { toast } from 'react-toastify';
import NoteContext from '../../context/NoteContext';

const SectionContainer = styled.section`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContainerMain = styled.div`    
    width: 350px;
    height: 103.36px;
    border: 2px solid #D9D9D9;
    border-radius: 28px;
    box-shadow: 2px 1px 5px #D9D9D9;
    background-color: #FFFFFF;  
    margin-bottom: 3rem;      

    hr {
        height: 2px;
        border: none;
        background-color: #D9D9D9;
    }
    
    @media screen and (min-width: 568px) {        
        width: 530px;
        border-radius: 8px;
    }
`;

const ContainerTitle =  styled.div`
    padding: 0.5rem 2rem 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;    

    button {
        padding: 0;
        border: none;        
        background: transparent;
        margin: 0;        
        cursor: pointer;
    }

    img {
        width: 19.35px;
        height: 18.38px;
    }

`;

const TextNote = styled.textarea`
    outline: none;
    border: none;
    color: #50656E;
    margin: 1rem 2rem 0.5rem 2rem;
    outline: none;
    border: none;
    font-size: 13px;
    font-family:'Inter', sans-serif ;
    background-color: transparent;
    resize: none; 
    overflow: hidden;

    &::placeholder {
        color: #50656E;
    }

`;

const InputTitle = styled.input`
    outline: none;
    border: none;
    font-size: 14.2px;
    font-weight: bolder;
    color: #000000;    

    &::placeholder {
        color: #000000;
    }

`;

const ContainerNote = styled.div`
    height: 55%;    
    display: flex;    
    align-items: center;
`;


function CreateNotes() {
    const { notesList, setNotesList } = useContext(NoteContext) || {};
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

            const response = await createNote(newNote);

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
    },[])

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

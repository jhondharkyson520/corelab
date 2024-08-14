import styled from 'styled-components';
import imgEditNote from '../../assets/icons/editNote.svg';
import imgEditColor from '../../assets/icons/editColor.svg';
import imgDeleteNote from '../../assets/icons/close.svg';
import imgStarYellow from '../../assets/icons/starYellow.svg';
import { useContext, useEffect, useRef, useState } from 'react';
import { deleteNote, getNotes, updateNote } from '../../services/api';
import { toast } from 'react-toastify';
import NoteContext from '../../context/NoteContext';

const SectionContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContainerMain = styled.div<{color: string}>`    
    width: 350px;
    height: 437.59px;
    border: none;
    box-shadow: 2px 1px 5px #D9D9D9;
    background-color: ${({ color }) => color ? color : '#FFFFFF'};
    margin-bottom: 3rem;      
    border-radius: 28px;

    hr{
        height: 1px;
        border: none;
        background-color: ${({ color }) => color ? '#FFFFFF' : color} ;        
    }
    
    @media screen and (min-width: 568px) {
        width: 100%;
        max-width: 530px;
    }
`;

const ContainerTitle =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2rem 0.5rem 2rem;

    button{
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    img{
        width: 19.35px;
        height: 18.38px;
    }
`;

const Note = styled.textarea`  
    color: #4F4F4D;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 1rem;
    outline: none;
    border: none;
    font-size: 13px;
    font-family:'Inter', sans-serif ;
    background-color: transparent;    
    max-width: 350px;
    height: 80%;
    resize: none; 
    overflow: hidden;  
`;

const Title = styled.input`   
    font-size: 14.2px;
    color: #4F4F4D;;
    font-weight: bold;
    outline: none;
    border: none;
    background-color: transparent;    
`;

const ContainerNote = styled.div`
    width: 100%;
    height: 87%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 568px) {
       max-width: 390px;
    }
   
`;

const ContainerFavorites = styled.div`    
    width: 100%;
    padding-left: 2rem;
    margin-bottom: 0.5rem;

    p{
      color: #464646;
      font-size: 12px;
    }

    @media screen and (min-width: 568px) {
      width: 100%;
      display: flex;
      padding-left: 6rem;
      margin-bottom: 0.5rem;
    }   
`;

const ContainerOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 0 2rem;

    button{
      border-radius: 100%;
      width: 35px;
      padding: 7px;
      border: none;
      background-color: transparent;

      &:hover{
        cursor: pointer;
        background-color: #FFE3B3;
      }
    }    
`;

const ContainerEdit = styled.div`
    display: flex;
    gap: 1rem;
`;

const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 4rem;
    padding-right: 4rem;

    @media screen and (min-width: 1008px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem; 
        justify-items: center;

        ${({ children }) => {

          let isSingleChildren = false;

          if (Array.isArray(children)) {            
            if (children.length === 1) {
              isSingleChildren = true;
            }
          } else if (children) {          
            isSingleChildren = true;            
          }

          if (isSingleChildren) {
            return `
              grid-template-columns: 1fr;
              justify-content: center;
              align-content: center;
            `;
          }

          return '';
          }}        
      }

    @media screen and (min-width: 1268px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem; 
        justify-items: center;
        
        ${({ children }) => {

          let isSingleChildren = false;

          if (Array.isArray(children)) {            
            if (children.length === 1) {
              isSingleChildren = true;
            }
          } else if (children) {          
            isSingleChildren = true;            
          }

          if (isSingleChildren) {
            return `
              grid-template-columns: 1fr;
              justify-content: center;
              align-content: center;
            `;
          }
          
          return '';
        }}
      }
`;

const ContainerColors = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 287px;
    height: 97px;
    box-shadow: 2px 1px 5px #D9D9D9;
    margin-left: 4rem;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0.4rem;
`;

const ColorButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 100%;

  &:hover{
    cursor: pointer;
  }
`;

interface SearchProps {
    searchTerm: string;
  }
  


function FavoritesNotes({searchTerm}: SearchProps) {

    const { notesList, setNotesList } = useContext(NoteContext)!;
    const [ favorite, setFavorite ] = useState(true);

    const [ openContainerEditColor, setOpenContainerEditColor ] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);    

    const colors = [
      '#BAE2FF', '#B9FFDD', '#FFE8AC', '#FFCAB9',
      '#F99494', '#9DD6FF', '#ECA1FF', '#DAFF8B',
      '#FFA285', '#CDCDCD', '#979797', '#A99A7C'
    ];

    const FavoriteControl = async (id: string) => {
        try {
          const noteToUpdate = notesList.find((note) => note.id === id);
      
          if (noteToUpdate) {
              const updatedNote = {
                ...noteToUpdate,
                favorite: !noteToUpdate.favorite,
              };
        
            await updateNote(id, updatedNote);
        
            setNotesList((prevNotesList) =>
                prevNotesList.map((note) =>
                  note.id === id ? updatedNote : note
                )
            );
          }

          toast.success('Nota removida dos favoritos!');
          
        } catch (error) {
          toast.error('Erro ao remover nota dos favoritos!');
          //console.error('Error update:', error);
        }
    };

    const HandleEditColor = (id: string) => {
      setOpenContainerEditColor(openContainerEditColor === id ? null : id);
    };  

    const HandleSelectColor = async (id: string, color: string) => {
        try {
          const noteUpdate = notesList.find((note) => note.id === id);

          if(noteUpdate) {
            const updatedNote = {
              ...noteUpdate,
              color: color,
            };

            await updateNote(id, updatedNote);
            setNotesList((prevNotesList) => prevNotesList.map((note) => (note.id === id ? updatedNote : note)));
          }

          setSelectedColor(color);
          setOpenContainerEditColor(null);
          toast.success('Cor da nota atualizada com sucesso!');

        } catch(error) {
            toast.error('Erro ao atualizar cor da nota!');
            //console.log('Error update color: ', error);            
        }     
       
    };

    const handleDeleteNote = async (id: string) => {
        try{
          await deleteNote(id);
          setNotesList((prevNotesList) => prevNotesList.filter((note) => note.id !== id));
          toast.success('Nota deletada com sucesso!');
        } catch(error) {
          toast.error('Erro ao deletar nota!');
          //console.log('Error delete note: ', error);
        }
    };

    useEffect(() => {

      const handleCloseContainerColor = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setOpenContainerEditColor(null);
        }        
      };
  
      document.addEventListener('mousedown', handleCloseContainerColor);

      return () => {
        document.removeEventListener('mousedown', handleCloseContainerColor);
      };

    }, []);

    useEffect(() => {

      async function fetchDataNote() {
          try {
              const response = await getNotes();
              setNotesList(response.data);
              //console.log('Note list: ', notesList);              
          } catch (error) {
              console.error("Error read note:", error);
          }
      };

      fetchDataNote();

  }, []);
  
  const handleEditNote = async ( id: string, title: string, note: string) => {

      try {
        const noteUpdate = notesList.find((note) => note.id === id);

        if(noteUpdate) {
          const updatedNote = {
            ...noteUpdate,
            title: title,
            note: note,
          };

          await updateNote(id, updatedNote);

          setNotesList((prevNotesList) => prevNotesList.map((note) => (note.id === id ? updatedNote : note)));
        }

        toast.success("Nota atualizada com sucesso!");
        
      } catch(error) {
          console.log('Error update color: ', error);
          toast.error('Erro ao atualizar nota!');          
      }
  };

  const handleTitleChange = (id: string, newTitle: string) => {
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  };

  const handleNoteChange = (id: string, newNote: string) => {
    setNotesList((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, note: newNote } : note
      )
    );
  };

  useEffect(() => {
    
  }, [notesList, searchTerm]);

  return (
 
        <SectionContainer>
          
          { favorite ?
          <>
            <ContainerFavorites>
              <p>Favoritas</p>
            </ContainerFavorites>            
                <ContainerItems >

                 {notesList
                  .filter((note) => 
                    note.favorite === true  &&
                    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    note.note.toLowerCase().includes(searchTerm.toLowerCase()))
                  )
                  .map((notesFavorites) => (         
                
                 <ContainerMain key={notesFavorites.id} color={notesFavorites.color}>
                   <ContainerTitle>
                       <Title
                         type="text" 
                         value={notesFavorites.title}
                         onChange={(e) => handleTitleChange(notesFavorites.id, e.target.value)}
                       />                     
                       <button onClick={() => FavoriteControl(notesFavorites.id)}>
                          <img  src={imgStarYellow} alt="Star Yellow icon" />
                       </button>                     
                   </ContainerTitle>
   
                   <hr />
   
                   <ContainerNote>

                       <Note 
                         value={notesFavorites.note}
                         onChange={(e) => handleNoteChange(notesFavorites.id, e.target.value)}
                       />                                   
   
                       <ContainerOptions>   
                         <ContainerEdit>
                           <button onClick={() => handleEditNote(notesFavorites.id, notesFavorites.title, notesFavorites.note)}>
                             <img src={imgEditNote} alt="Edit note icon" />
                           </button>
                           <button onClick={() => HandleEditColor(notesFavorites.id)}>
                             <img src={imgEditColor} alt="Edit color icon" />
                           </button>
                         </ContainerEdit>
                         <button onClick={() => handleDeleteNote(notesFavorites.id)}>
                            <img src={imgDeleteNote} alt="Delete note icon" />
                         </button>
                       </ContainerOptions>   

                   </ContainerNote>
   
                   {  openContainerEditColor === notesFavorites.id && (

                      <ContainerColors ref={containerRef}>   
                          {colors.map((color, index) => (
                            <ColorButton 
                              key={index} 
                              color={color} 
                              onClick={() => HandleSelectColor(notesFavorites.id, color)}                          
                            />
                          ))} 
                      </ContainerColors>

                   )} 
               </ContainerMain>
              ))}
              </ContainerItems>          
           
            </>

            : <></>

          }

        </SectionContainer>
  )
}

export default FavoritesNotes;

import imgEditNote from '../../assets/icons/editNote.svg';
import imgEditColor from '../../assets/icons/editColor.svg';
import imgDeleteNote from '../../assets/icons/close.svg';
import imgStarYellow from '../../assets/icons/starYellow.svg';
import { useContext, useEffect, useRef, useState } from 'react';
import { deleteNote, getNotes, updateNote } from '../../services/api';
import { toast } from 'react-toastify';
import NoteContext from '../../context/NoteContext';
import { 
  SectionContainer, 
  ContainerFavorites, 
  ContainerItems, 
  ContainerMain, 
  ContainerTitle, 
  Title, 
  ContainerNote, 
  Note, 
  ContainerOptions, 
  ContainerEdit, 
  ContainerColors, 
  ColorButton 
} from './styles';

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
        }    
    };

    const handleDeleteNote = async (id: string) => {
        try {
          await deleteNote(id);
          setNotesList((prevNotesList) => prevNotesList.filter((note) => note.id !== id));
          toast.success('Nota deletada com sucesso!');
        } catch(error) {
          toast.error('Erro ao deletar nota!');
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
          } catch (error) {
              console.error("Error read note:", error);
          }
      };
      fetchDataNote();
  }, []);
  
  const handleEditNote = async (id: string, title: string, note: string) => {
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
                   { openContainerEditColor === notesFavorites.id && (
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
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteContext from "./context/NoteContext";
import CreateNotes from "./pages/createNotes";
import FavoritesNotes from "./pages/favorites";
import OthersNotes from "./pages/others";
import { getNotes } from "./services/api";

type ListProps = {
  id: string;
  title: string;
  note: string;
  favorite: boolean;
  color: string;
}

interface NoteProps {
  notesFavorites?: ListProps[];
}

function App({notesFavorites}: NoteProps) {
  const [notesList, setNotesList] = useState(notesFavorites || []);
  const [searchTerm, setSearchTerm] = useState<string>(""); 

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

  return (
    <>
      <NoteContext.Provider value={{notesList, setNotesList}}>     
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <CreateNotes/>
        <FavoritesNotes searchTerm={searchTerm}/>
        <OthersNotes searchTerm={searchTerm}/>
      </NoteContext.Provider>
    </>
  )
}

export default App;
import { createContext, Dispatch, SetStateAction } from "react";

type ListProps = {
  id: string;
  title: string;
  note: string;
  favorite: boolean;
  color: string;
};

interface NoteContextProps {
  notesList: ListProps[];
  setNotesList: Dispatch<SetStateAction<ListProps[]>>;
}

const NoteContext = createContext<NoteContextProps | undefined>(undefined);

export default NoteContext;

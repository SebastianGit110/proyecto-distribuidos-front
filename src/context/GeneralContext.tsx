import { createContext } from "react";
import { NotesProps } from "../types";

type GeneralContextType = {
  currentNote: NotesProps;
  setCurrentNote: React.Dispatch<React.SetStateAction<NotesProps>>;
};

export const GeneralContext = createContext<GeneralContextType>({
  currentNote: {
    note_id: "",
    subject_id: "",
    type: "",
    content: "",
    image_url: "",
  },
  setCurrentNote: () => {},
});

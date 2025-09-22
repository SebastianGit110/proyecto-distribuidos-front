import { ReactNode, useState } from "react";
import { GeneralContext } from "./GeneralContext";

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const [currentNote, setCurrentNote] = useState({
    note_id: "",
    subject_id: "",
    type: "",
    content: "",
    image_url: "",
  });

  return (
    <GeneralContext.Provider
      value={{
        currentNote,
        setCurrentNote,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

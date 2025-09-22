import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import { NotesProps } from "../../types";
import { useNavigate } from "react-router-dom";

interface NoteProps {
  note: NotesProps;
}

function Note({ note }: NoteProps) {
  const navigate = useNavigate();

  const { setCurrentNote } = useContext(GeneralContext);

  return (
    <div
      className="bg-[#FFFBF4] rounded-lg flex flex-col 
             border border-gray-300 shadow-sm 
             transition-transform duration-200 hover:shadow-md hover:scale-[1.02] hover:border-gray-400 cursor-pointer
             min-h-64"
      onClick={() => {
        setCurrentNote(note);
        navigate("/note");
      }}
    >
      {note.image_url ? (
        <img
          src={note.image_url}
          alt="note"
          className="w-full h-40 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-40 bg-white rounded-t-lg"></div>
      )}

      <div className="border-t border-gray-300"></div>

      <p className="p-3 text-gray-800 text-sm font-medium line-clamp-5">
        {note.content}
      </p>
    </div>
  );
}

export default Note;

import { useNavigate, useParams } from "react-router-dom";
import { notes } from "../../data/exampleData";
import Note from "./Note";

function Notes() {
  const navigate = useNavigate();
  const { subject_id } = useParams();

  return (
    <div className="px-20 py-5">
      <div className="flex items-center justify-between mb-6">
        <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition"
          onClick={() => {
            navigate("/");
          }}
        >
          Volver
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {notes.map((note) => (
          <Note key={note.note_id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;

import { useNavigate, useParams } from "react-router-dom";
import Note from "./Note";
import { AddSubject } from "../../utils/Icons";
import { useEffect, useState } from "react";
import { NotesProps } from "../../types";
import { getNotes } from "../../api";

function Notes() {
  const navigate = useNavigate();
  const { subject_id } = useParams();

  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<NotesProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!subject_id) return;

        const response = await getNotes(subject_id);

        setNotes(response.data);

        console.log(
          "LA RESPUESTA DE NOTAS PARA MATERIA ",
          subject_id,
          response
        );
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="px-20 py-5">
      <div className="flex items-center justify-between mb-6">
        <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition"
          onClick={() => {
            navigate("/home");
          }}
        >
          Volver
        </button>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-md bg-[#d86d38] p-2 text-white hover:bg-[#b95528] transition"
        >
          <AddSubject />
          Nueva Materia
        </button>

        {open && <Modal onClose={() => setOpen(false)} />}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h3 className="text-xl font-semibold mb-4">Agregar Nota</h3>

        {/* Formulario */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre de la materia"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d86d38]"
          />
          <button
            type="submit"
            className="bg-[#d86d38] text-white rounded-md py-2 hover:bg-[#b95528] transition"
          >
            Guardar
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

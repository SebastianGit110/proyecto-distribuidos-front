import { useContext, useState } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import { useNavigate } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../utils/Icons";
import { deleteNote, editNote } from "../../api";

function NoteContent() {
  const navigate = useNavigate();
  const { currentNote } = useContext(GeneralContext);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    subject_id: currentNote.subject_id,
    type: currentNote.type,
    content: currentNote.content,
    image_url: currentNote.image_url,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
    console.log("EDITANDO", id);
  };

  const handleDelete = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
    console.log("Eliminando", id);
  };

  const handleDeleteNoteById = async () => {
    try {
      await deleteNote(currentNote.id);
      console.log("Eliminando...");
    } catch (error) {
      console.log("ERROR AL ELIMINAR NOTE", error);
    } finally {
      setIsDeleteModalOpen(false);
      navigate(`/notes/${currentNote.subject_id}`);
    }
  };

  const handleEditNoteById = async () => {
    try {
      await editNote(currentNote.id, formData);
    } catch (error) {
      console.log("ERROR AL EDITAR NOTA", error);
    } finally {
      setIsEditModalOpen(false);
      navigate(`/notes/${currentNote.subject_id}`)
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-11 gap-4 my-5">
        <div className="col-span-3 col-start-2 row-start-1 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition"
            onClick={() => navigate(`/notes/${currentNote.subject_id}`)}
          >
            Volver
          </button>

          <div className="flex gap-2">
            <EditIcon
              handleEdit={(e) => {
                handleEdit(e, currentNote.id);
              }}
            />
            <DeleteIcon
              handleDelete={(e) => {
                handleDelete(e, currentNote.id);
              }}
            />
          </div>
        </div>

        {/* Contenedor principal de la tarjeta */}
        <div className="col-span-3 row-span-6 col-start-2 row-start-2 bg-white rounded shadow flex flex-col">
          <img
            src={currentNote.image_url}
            alt="placeholder"
            className="w-full h-60 object-cover rounded-t"
          />

          <div className="border-t border-gray-300"></div>

          <p className="p-3 text-gray-700 text-sm">{currentNote.content}</p>
        </div>

        {/* Resumen y lista */}
        <div className="col-span-3 row-span-4 col-start-2 row-start-8 bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Resumen</h2>
          <p className="text-gray-600 text-sm mb-3">
            Este es un texto ficticio que sirve como resumen breve de los datos
            listados más abajo. Proporciona contexto adicional para el lector.
          </p>
          <h3 className="font-semibold text-lg text-gray-700 mb-2">
            Lista de datos
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Dato 1: información ficticia</li>
            <li>Dato 2: valor aleatorio</li>
            <li>Dato 3: otro contenido</li>
            <li>Dato 4: ejemplo adicional</li>
            <li>Dato 5: prueba final</li>
          </ul>
        </div>
      </div>

      {/* Modal editar */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Editar Nota</h2>

            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Type"
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Content"
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="Image URL"
              autoComplete="off"
              className="w-full p-2 border rounded mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleEditNoteById}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Eliminar Nota</h2>
            <p className="text-gray-700 mb-6">
              ¿Estás seguro que deseas eliminar esta nota?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteNoteById}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteContent;

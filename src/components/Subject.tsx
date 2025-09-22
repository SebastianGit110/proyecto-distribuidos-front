import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, DeleteIcon, EditIcon } from "../utils/Icons";
import { SubjectsProps } from "../types";

export const Subject = ({
  subject_id,
  name,
  notesLength,
  color,
}: SubjectsProps) => {
  const navigate = useNavigate();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleClick = () => {
    navigate(`/notes/${subject_id}`);
  };

  const handleEdit = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    subject_id: string
  ) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
    console.log("EDITANDO", subject_id);
  };

  const handleDelete = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    subject_id: string
  ) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
    console.log("Eliminando", subject_id);
  };

  return (
    <>
      <div
        className="relative w-1/4 p-6 rounded-xl flex items-center justify-between 
        border border-gray-300 shadow-sm bg-[#FFFBF4] 
        transition-transform duration-200 hover:shadow-md hover:scale-[1.02] hover:border-gray-400 cursor-pointer"
        onClick={handleClick}
      >
        <div className="absolute top-2 right-2 flex gap-2">
          <EditIcon handleEdit={(e) => handleEdit(e, subject_id)} />
          <DeleteIcon handleDelete={(e) => handleDelete(e, subject_id)} />
        </div>

        <CalendarIcon color={color!} />
        <div className="flex-1 text-center">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm text-gray-700">Notas: {notesLength}</p>
        </div>
      </div>

      {/* Modal editar */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Editar asignatura</h2>
            <input
              type="text"
              defaultValue={name}
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
                onClick={() => {
                  console.log("Guardando cambios...");
                  setIsEditModalOpen(false);
                }}
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
            <h2 className="text-xl font-semibold mb-4">Eliminar asignatura</h2>
            <p className="text-gray-700 mb-6">
              ¿Estás seguro que deseas eliminar{" "}
              <span className="font-semibold text-red-600">{name}</span>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  console.log("Eliminando...");
                  setIsDeleteModalOpen(false);
                }}
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
};

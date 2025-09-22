import { useState } from "react";
import { AddSubject } from "../utils/Icons";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-6 mx-[8.5rem] pt-4">
      <h2 className="text-2xl font-bold">Mis materias</h2>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md bg-[#d86d38] p-2 text-white hover:bg-[#b95528] transition"
      >
        <AddSubject />
        Nueva Materia
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
};

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h3 className="text-xl font-semibold mb-4">Agregar Materia</h3>

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

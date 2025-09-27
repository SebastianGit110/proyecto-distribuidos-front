import { useNavigate } from "react-router-dom";
import { LoginI } from "../types";
import { useState } from "react";
import { login } from "../api";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginI>({
    username: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      console.log("LA DATA AL LOGUEARME ES", formData);
      const response = await login(formData);

      localStorage.setItem('token', response.data.access_token)

      console.log("LA RESPUESTA AL LOGUEARME ES", response);

      navigate('/home')
    } catch (error) {
      console.log("ERROR AL LOGUEARME", error);
      alert("Hubo un error al loguearme");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              name='username'
              placeholder="Usuario"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name='password'
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleOnChange}
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleLogin}
          >
            Entrar
          </button>
          <p className="text-sm text-center text-gray-600">
            ¿No estás registrado?{" "}
            <span
              onClick={handleRegister}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Regístrate aquí
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

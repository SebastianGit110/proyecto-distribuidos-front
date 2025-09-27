import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupI } from "../types";
import { register } from "../api";

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignupI>({
    username: "",
    email: "",
    password_hash: "",
    created_at: new Date(),
  });

  // Para mostrar mensaje/borde solo después de que el usuario interactúe
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  // Validaciones derivadas del estado actual
  const isPasswordTooShort = formData.password_hash.length < 8;
  const isUsernameEmpty = formData.username.trim() === "";
  const isEmailEmpty = formData.email.trim() === "";

  // Form inválido si falta algo o la contraseña es muy corta
  const isFormInvalid = isPasswordTooShort || isUsernameEmpty || isEmailEmpty;

  const handleRegister = async () => {
    // doble chequeo en submit (por seguridad)
    if (isFormInvalid) return;

    try {
      console.log("LA DATA A ENVIAR ES", formData);
      const response = await register(formData);
      console.log("LA RESPUESTA AL REGISTRARME ES", response);
      navigate("/login");
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Hubo un error al registrarse");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Registrarme</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              name="username"
              type="text"
              placeholder="Usuario"
              value={formData.username}
              onChange={handleOnChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              name="email"
              type="email"
              placeholder="tuemail@ejemplo.com"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              name="password_hash"
              type="password"
              placeholder="********"
              value={formData.password_hash}
              onChange={handleOnChange}
              onBlur={handlePasswordBlur}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                isPasswordTooShort && passwordTouched
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {isPasswordTooShort && passwordTouched && (
              <p className="text-red-500 text-sm mt-1">
                La contraseña debe tener al menos 8 caracteres
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleRegister}
            disabled={isFormInvalid}
            className={`w-full py-2 rounded-md transition ${
              isFormInvalid
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Registrar
          </button>

          <p className="text-sm text-center text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <span
              onClick={handleLogin}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Entra aquí
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

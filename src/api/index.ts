import axios from "axios";
import { LoginI, SignupI } from "../types";

export const register = async (body: SignupI) =>
  await axios.post(
    `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/auth/signup`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const login = async (body: LoginI) => {
  const params = new URLSearchParams();
  params.append("username", body.username);
  params.append("password", body.password);

  return await axios.post(
    `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/auth/login`,
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export const getSubjects = async () => {
  const token = localStorage.getItem("token");

  console.log("EL TOKEN A ENVIAR EN GETSUBJECTS ES", token);

  return await axios.get(
    "https://proyectodistribuidosfastapimongodbia-production.up.railway.app/subjects/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

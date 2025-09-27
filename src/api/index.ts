import axios from "axios";
import { LoginI, SignupI } from "../types";

// Auth

export const register = async (body: SignupI) => {
  try {
    return await axios.post(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/auth/signup`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("ERROR register", error);
    throw error;
  }
};

export const login = async (body: LoginI) => {
  try {
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
  } catch (error) {
    console.log("ERROR login", error);
    throw error;
  }
};

// Subjects

export const getSubjects = async () => {
  try {
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
  } catch (error) {
    console.log("ERROR getSubjects", error);
    throw error;
  }
};

export const postNewSubject = async (name: string) => {
  try {
    const token = localStorage.getItem("token");

    console.log("EL TOKEN A ENVIAR EN POSTSUBJECTS ES", token);

    return await axios.post(
      "https://proyectodistribuidosfastapimongodbia-production.up.railway.app/subjects/",
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR postNewSubject", error);
    throw error;
  }
};

export const editSubject = async (subjectId: string, name: string) => {
  try {
    const token = localStorage.getItem("token");

    console.log("EL TOKEN A ENVIAR EN EDITSUBJECTS ES", token);

    return await axios.put(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/subjects/${subjectId}`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR editSubject", error);
    throw error;
  }
};

export const deleteSubject = async (subjectId: string) => {
  try {
    const token = localStorage.getItem("token");

    console.log("EL TOKEN A ENVIAR EN DELETESUBJECTS ES", token);

    return await axios.delete(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/subjects/${subjectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR deleteSubject", error);
    throw error;
  }
};

// Notes

export const getNotes = async (subjectId: string) => {
  try {
    const token = localStorage.getItem("token");

    return await axios.get(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/notes/by-subject/${subjectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR getNotes", error);
    throw error;
  }
};

export const postNewNote = async (body: {
  subject_id: string;
  type: string;
  content: string;
  image_url: string;
}) => {
  try {
    const token = localStorage.getItem("token");

    console.log("EL TOKEN A ENVIAR EN POSTNEWNOTE ES", token);

    return await axios.post(
      "https://proyectodistribuidosfastapimongodbia-production.up.railway.app/notes/",
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR postNewNote", error);
    throw error;
  }
};

export const editNote = async (
  noteId: string,
  formData: {
    subject_id: string;
    type: string;
    content: string;
    image_url: string;
  }
) => {
  try {
    const token = localStorage.getItem("token");

    console.log("EL TOKEN A ENVIAR EN EDITNOTE ES", token);

    return await axios.put(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/notes/${noteId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR editNote", error);
    throw error;
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    const token = localStorage.getItem("token");

    console.log("EL TOKEN A ENVIAR EN DELETENOTE ES", token);

    return await axios.delete(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/notes/${noteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR deleteNote", error);
    throw error;
  }
};

export const getNoteSummary = async (noteId: string) => {
  try {
    const token = localStorage.getItem("token");

    return await axios.get(
      `https://proyectodistribuidosfastapimongodbia-production.up.railway.app/notes/${noteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR getNoteSummary", error);
    throw error;
  }
};

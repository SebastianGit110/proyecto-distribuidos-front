import { Navigate, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../components/HomePage";
import Notes from "../components/notes/Notes";
import NoteContent from "../components/notes/NoteContent";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";

export const MainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to={"login"} /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <HomePage /> },
      { path: "notes/:subject_id", element: <Notes /> },
      { path: "note", element: <NoteContent /> },
    ],
  },
];

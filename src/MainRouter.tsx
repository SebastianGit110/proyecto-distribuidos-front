import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

const router = createHashRouter(MainRoutes);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};

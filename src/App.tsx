import { Outlet } from "react-router-dom";
import { GeneralProvider } from "./context/GeneralProvider";

function App() {
  return (
    <>
      <GeneralProvider>
        <Outlet />
      </GeneralProvider>
    </>
  );
}

export default App;

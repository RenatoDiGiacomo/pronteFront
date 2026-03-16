import { Outlet } from "react-router-dom";
import { AuthProvider } from "../providers/AuthProvider";

import "./App.css";

function App() {
  return (
    <main className="w-full min-h-screen">
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </main>
  );
}

export default App;

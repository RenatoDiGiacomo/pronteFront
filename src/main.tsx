import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

// 1. Defina suas rotas

// 2. Renderize o RouterProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);

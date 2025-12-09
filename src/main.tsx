import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Expositions from "./pages/Expositions";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import Diary from "./pages/Diary";
import { Exposition } from "./pages/Exposition";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Expositions />,
      },
      {
        path: "expositions",
        element: <Expositions />,
      },
      {
        path: "exposition/:expositionId",
        element: <Exposition />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "diary",
        element: <Diary />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

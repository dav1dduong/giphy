import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FavoritesContextProvider from "./context/FavoritesContextProvider.tsx";
import DarkModeContextProvider from "./context/DarkModeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavoritesContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </FavoritesContextProvider>
  </StrictMode>
);

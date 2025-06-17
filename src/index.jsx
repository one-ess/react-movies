import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import App from "./components/App/App.jsx";
import { MovieContextProvider } from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </StrictMode>
);

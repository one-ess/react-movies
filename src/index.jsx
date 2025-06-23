import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MovieContextProvider } from "./context/context.jsx";

import "./index.scss";

import App from "./components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </BrowserRouter>
  </StrictMode>
);

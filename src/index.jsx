import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { RegistrationContextProvider } from "./Context/RegistrationContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RegistrationContextProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </RegistrationContextProvider>
  </StrictMode>
);
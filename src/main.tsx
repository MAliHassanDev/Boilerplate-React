import { createRoot } from "react-dom/client";
import {StrictMode } from "react";
import App from "@/app/App";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import "./styles/main.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Unable to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);




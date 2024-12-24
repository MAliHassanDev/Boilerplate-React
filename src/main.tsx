import "./styles/main.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/app/App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Unable to find the root element");

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
);

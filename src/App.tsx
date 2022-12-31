import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};

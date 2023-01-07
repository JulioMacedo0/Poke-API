import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { PokemonContextProvider } from "./context/PokemonContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PokemonContextProvider>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </PokemonContextProvider>
    </ThemeProvider>
  );
};

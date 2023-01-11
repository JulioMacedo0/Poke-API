import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
   background-color: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
}

#root {
  min-height: 100%;
}
button {
  cursor: pointer;
}
body , input , textarea , button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
`;

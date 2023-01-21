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

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

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

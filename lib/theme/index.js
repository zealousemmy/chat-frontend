import { createGlobalStyle } from "styled-components";
import { Color } from "./color";

export const theme = {
  Color,
};

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
      font-family: 'Poppins', sans-serif;
    }
`;

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
        /* font-size: 1.1rem; */
    }

    body{
      background-color:#D8D8D8 ;
      font-family: 'Poppins', sans-serif;
    }

   input,select,textarea{
    font-size: 1rem;
    color:#555 ;
    
    ::placeholder{
      font-weight:200 ;
    }
   }
`;

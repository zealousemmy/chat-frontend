import { FaSearch } from "react-icons/fa";
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
        font-style: normal;
        font-family: 'Poppins', sans-serif;
      }
      
      body{
        background-color:#D8D8D8 ;
      }
    
   input,select,textarea{
    color:#555 ;
    
    ::placeholder{
      font-weight:200 ;
    }
   }

   .header-text-large{
    font-weight: 600;
font-size: 28px !important;
line-height: 42px;
   }

   .header-text{
   
font-weight: 600;
font-size: 20px !important;
line-height: 30px;
   }

   .text{
    font-weight: 400;
font-size: 12px !important;
line-height: 18px;
   }

   .text-medium{
    font-weight: 400;
font-size: 16px !important;
line-height: 24px;
   }

   .table-text-header{
    font-weight: 500;
font-size: 14px !important;
line-height: 21px;
   }

   .table-text{
    font-weight: 500;
font-size: 14px !important;
line-height: 21px;
   }
`;

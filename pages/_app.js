import {GlobalStyle, theme} from "../lib/theme";
import {ThemeProvider} from "styled-components";

// GlobalStyle,theme,ThemeProvider,
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}



export default MyApp;
// export async function getServerSideProps(context){
//     console.log("kddk")
//     return{
//         props:{GlobalStyle,theme,ThemeProvider}
//     }
// }
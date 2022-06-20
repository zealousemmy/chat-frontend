import {GlobalStyle, theme} from "../lib/theme";
import {ThemeProvider} from "styled-components";
import AppContestWrapper from "../util/store/userContext";

// GlobalStyle,theme,ThemeProvider,

function MyApp({Component, pageProps}) {
    return (
        <AppContestWrapper>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
        </AppContestWrapper>
    );
}


export default MyApp;
// export async function getServerSideProps(context){
//     console.log("kddk")
//     return{
//         props:{GlobalStyle,theme,ThemeProvider}
//     }
// }
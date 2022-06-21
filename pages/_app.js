import {GlobalStyle, theme} from "../lib/theme";
import {ThemeProvider} from "styled-components";
import AppContestWrapper from "../util/store/userContext";
import {ToastContainer, Zoom} from "react-toastify";

// GlobalStyle,theme,ThemeProvider,

function MyApp({Component, pageProps}) {
    return (
        <AppContestWrapper>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <ToastContainer transition={Zoom} draggable={false} />
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
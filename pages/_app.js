import {GlobalStyle, theme} from "../lib/theme";
import {ThemeProvider} from "styled-components";
import AppContestWrapper from "../util/store/userContext";
import {ToastContainer, Zoom} from "react-toastify";
import Auth from "../Authentication/privateRoute";
import Head from "next/head"
import LoggedIn from "../Authentication/privateRoute/isLoggedIn";
// GlobalStyle,theme,ThemeProvider,

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <AppContestWrapper>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <ToastContainer transition={Zoom} draggable={false}/>

                {Component.auth ? (
                    <Auth>
                        <Component {...pageProps} />
                    </Auth>
                ) : (
                    <LoggedIn>
                    <Component {...pageProps} />
                    </LoggedIn>
                )}
            </ThemeProvider>
        </AppContestWrapper>
    );
}


export default MyApp;



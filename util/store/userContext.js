import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {DecryptData, EncryptData} from "../dataSecurity";

const AppContext = createContext();

export function AppWrapper({children}) {
    const router = useRouter()
    const [sharedState, setSharedState] = useState(null)

    const LogOut = useCallback(() => {
        setSharedState(null)
        router?.push("/")
    }, [])

    const cacheChannelId = useCallback((id) => {
        if(id !== null) {
            EncryptData(id, "channelPostId")
            setSharedState({...sharedState, channelPostId: id})
        }
    }, [])

    const StoreUserDetails = useCallback(async (token, user) => {
        EncryptData(token, "xtk");
        EncryptData(user, "xur");
        setSharedState({token, user})
    }, [])

    const exposed = {
        user: sharedState?.user || null,
        token: sharedState?.token || null,
        channelPostId: sharedState?.channelPostId || null,
        setSharedState,
        sharedState,
        LogOut,
        StoreUserDetails,
        cacheChannelId
    }

    const getDetails = useCallback(() => {
        let token = DecryptData("xtk")
        let user = DecryptData("xur")
        let channelPostId = DecryptData("channelPostId")
        setSharedState({token, user, channelPostId})
    }, [])

    useEffect(() => {
        return () => getDetails()
    }, [])

    return (
        <AppContext.Provider value={exposed}>
            {children}
        </AppContext.Provider>
    );
}

export const useUser = () => useContext(AppContext)

export default AppWrapper
import react, {createContext, useCallback, useContext, useEffect, useState} from "react";
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
    const StoreUserDetails = useCallback(async (token, user) => {
        EncryptData(token, "xtk");
        EncryptData(user, "xur");
        setSharedState({token, user})
    }, [])
    const exposed = {
        user: sharedState?.user || null,
        token: sharedState?.token || null,
        setSharedState,
        LogOut,
        StoreUserDetails
    }
    const getDetails =useCallback(()=>{
        let token = DecryptData("xtk")
        let user = DecryptData("xur")
        setSharedState({token, user})
    },[])

    useEffect(() => {
       return()=> getDetails()
    }, [])

    return (
        <AppContext.Provider value={exposed}>
            {children}
        </AppContext.Provider>
    );
}

export const useUser = () => useContext(AppContext)

export default AppWrapper
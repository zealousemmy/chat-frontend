import {createContext, useCallback, useContext, useState} from 'react';
import {useRouter} from "next/router";
const AppContext = createContext();

export function AppWrapper({children}) {
    const router = useRouter()
    const [sharedState, setSharedState] = useState(null)
    const LogOut = useCallback(()=>{
        setSharedState(null)
        router?.push("/")
    },[])
    const exposed = {
        user:sharedState?.user || null,
        token:sharedState?.token || null,
        setSharedState,
        LogOut
    }
    return (
        <AppContext.Provider value={exposed}>
            {children}
        </AppContext.Provider>
    );
}
export const useUser = ()=>useContext(AppContext)

export default  AppWrapper
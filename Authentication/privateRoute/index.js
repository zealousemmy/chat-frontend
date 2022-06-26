import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function Redirect({to}) {
    const router = useRouter()

    useEffect(() => {
        router?.replace(to)
    }, [to,router])
    return null
}
function Auth({ children }) {
    const [loading,setLoading] = useState(true  )
    const [user,setUser] = useState(false)

    useEffect(()=>{
        return ()=>{
            let auth = typeof  window !== "undefined" && window.localStorage.getItem("xur")
            auth && setUser(true)
            setLoading(false)
        }
    },[])
 return loading ? <p>loading...</p> :user ? children :<Redirect to={"/auth/signin"}/>
}
export default Auth
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import PreLoader from "../../components/preLoader";
export function Redirect({to}) {
    const router = useRouter()

    useEffect(() => {
        router?.replace(to)
    }, [to,router])
    return null
}
function LoggedIn({ children }) {
    const [loading,setLoading] = useState(true  )
    const [user,setUser] = useState(false)

    useEffect(()=>{

        let auth = typeof  window !== "undefined" && window.localStorage.getItem("xur")
        if(auth !== null){
            setUser(true)
            setLoading(false)
        }
        setLoading(false)

    },[loading,user])

    return (
        loading ? <PreLoader/>:user ? <Redirect to={"/dashboard"}/>: children
    )
}
export default LoggedIn
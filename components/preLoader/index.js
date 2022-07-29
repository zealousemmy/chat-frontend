import react from "react"
import {PreLoaderContainer} from "./preLoader.style";
import Image from "next/image";
import loading from "../../asset/abolle.svg"
const PreLoader = ()=>{
    return(
        <PreLoaderContainer>
            <div className={"loader-wrapper"}><Image src={loading} alt={"preloader"} priority={true} width={100} height={100} /><span className={"logo-text"}>Abolle</span></div>
        </PreLoaderContainer>
    )
}

export default PreLoader
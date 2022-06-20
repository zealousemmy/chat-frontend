import React, {useState} from "react";
import {withTheme} from "styled-components";
import {CardBody, CardStyles} from "./cards.style";
import Axios from "axios";
import {ServerDomain} from "../../util/config";
import {channel} from "diagnostics_channel";


const Cards = ({theme: {Color}, CardArray, error}) => {
    const [reverse, setReverse] = useState(false)
    let step = 0
    let colourScheme = [
        {
            c1: "#ec4332",
            c2: "#f67a29",
            c3: "#f89a78",
            c4: "#f79876",
        }, {
            c1: "#a23965",
            c2: "#eb70bf",
            c3: "#eaa0ce",
            c4: "#58347a"
        }, {
            c1: "#348165",
            c2: "#48ab85",
            c3: "#dbf5ba",
            c4: "#b9f2b5"
        }, {
            c1: "#60a9f2",
            c2: "#60a9f2",
            c3: "#d5faf6",
            c4: "#3fa59a",
        }]
    const checkKey = (key) => {
        if (step === 3 || key > 3) {
            if (step === 0) {
                step++
            } else {
                step--
            }
        } else {
            step++
        }

    }
const JoinGroup = (channelId)=> {
        Axios.get(`${ServerDomain}/channel/subscribe/10/${channelId}`, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
        }).catch((err) => setError(true))
    }
    return (
        <CardStyles Color={Color}>
            {error ? <p style={{color: "red"}}>Error Occurred while fetching data please check your internet
                connection!</p> : !CardArray?.data ? <p>Loading...</p> : CardArray?.data?.map((item, key) => (
                <CardBody
                    key={key}
                    Color={Color}
                    c1={colourScheme[step]?.c1}
                    c2={colourScheme[step]?.c2}
                    c3={colourScheme[step]?.c3}
                    c4={colourScheme[step]?.c4}
                >
                    {checkKey(key)}
                    <div className={"cardbody"}>
                        <h6 style={{color: "#1F2937", fontSize: "16px", fontWeight: "400"}}>{item.title}</h6>
                        <p style={{color: "#595D64", fontSize: "14px"}}>{item.description}</p>
                        <button>Join +</button>
                    </div>
                </CardBody>
            ))}
        </CardStyles>
    );
};

export default withTheme(Cards);

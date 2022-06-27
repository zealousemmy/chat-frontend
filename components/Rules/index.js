import React,{useState,useEffect,useCallback} from "react";
import Accordion from "../../universal-components/Accordion";
import Container from "../../universal-components/Container";
import Axios from "axios";
import {
  RulesWrapper,
  RulesWrapperHeader,
  RulesWrapperHeader__top,
  RulesWrapperHeader__bottom,
  RulesWrapperContent,
} from "./styles";
import Notify from "../../util/notify"
import { useUser } from "../../util/store/userContext";

const Rules = () => {
  const {sharedState} = useUser()
  const [rules,setRules] =useState([])
  const [newRule,setNewRule] = useState("")


  const GetChannelRules = useCallback(()=>{
    Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-rule/${sharedState?.channelPostId}`).then((res)=>{
      setRules(res?.data?.data)
    }).catch((err)=>console.log(err))
  },[sharedState?.channelPostId])

  const CreateRule =()=>{
    let payLoad = {channel_id:sharedState?.channelPostId, rule:newRule}
    Axios.post(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-rule/create`,payLoad,{
      headers:{
       "content-Type": "application/json"  
     }
    }).then((res)=>{
      Notify(res.data.message)
      GetChannelRules()
        }).catch((err)=>console.log(err))
  }
  

  useEffect(()=>{
    sharedState?.channelPostId && GetChannelRules()
  },[sharedState?.channelPostId])
  return (
    <>
      <RulesWrapper>
        <Container>
          <RulesWrapperHeader>
            <RulesWrapperHeader__top>
              <input type="text" placeholder="Edit your channel rules here" value={newRule} onChange={(e)=> setNewRule(e.target.value)} />
            </RulesWrapperHeader__top>
            <RulesWrapperHeader__bottom>
              <button onClick={CreateRule}> Create new rule</button>
            </RulesWrapperHeader__bottom>
          </RulesWrapperHeader>
          <RulesWrapperContent>
            <h2>Rules and regulations</h2>
            {rules.map(
              ({ id, rule, content, avatar, footer, timeApplied },key) => (
                <Accordion
                  label={`Section ${key + 1}`}
                  content={rule}
                  // avatar={avatar}
                  key={key}
                  // timeApplied={timeApplied}
                  // footer={footer}
                />
              )
            )}
          </RulesWrapperContent>
        </Container>
      </RulesWrapper>
    </>
  );
};

export default Rules;

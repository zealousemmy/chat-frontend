import ChannelPost from "../../../components/Channel-Post";
import {DecryptData} from "../../../util/dataSecurity";
import {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useUser} from "../../../util/store/userContext";
const ChannelPostIndex = () => {
    const router = useRouter()
    const {channelPostId,setSharedState,sharedState} = useUser()

    const [posts,setPosts] = useState(null)
    const [info,setInfo] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const getPageData = useCallback(async(query)=> {
        try {
            const [postRes, infoRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/post/channel-post/${query}`),
                fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/get/${query}`)
            ]);
            const [posts, info] = await Promise.all([
                postRes.json(),
                infoRes.json()
            ]);
            setLoading(false)
            setSharedState({...sharedState,channelInfo:info,channelPost:posts})
        }catch (e) {
            setLoading(false)
            setError(true)
        }
    },[channelPostId])


    useEffect(()=>{
        let id = DecryptData("channelPostId")
        if(!router?.query?.q){
            router?.replace(`${router.pathname}?q=${router?.query?.q || id}`)
            return ()=>getPageData(id)
        }
        getPageData(id).then()


    },[])
  return (
    <div>
      <ChannelPost  loading={loading} error={error}/>
    </div>
  );
};

ChannelPostIndex.auth = true

export default ChannelPostIndex;


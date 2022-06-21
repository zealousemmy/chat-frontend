import MyChannel from "../../components/My-Channel";
import {ServerDomain} from "../../util/config";

const MyChannels = ({data}) => {
    return (
        <div>
            <MyChannel data={data}/>
        </div>
    );
};

export async function getServerSideProps({res,query}) {
    let response;
    if(!query.q){
        res.setHeader("location", "/dashboard/channel");
        res.statusCode = 302;
     return   res.end();
    }
    let data = await fetch(`${ServerDomain}/post/channel-post/${query?.q}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
    response = await data.json()
    return {
        props: {
            data: response
        }

    }
}

export default MyChannels;

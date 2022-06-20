import MyChannel from "../../components/My-Channel";
import {ServerDomain} from "../../util/config";

const MyChannels = ({data}) => {
    return (
        <div>
            <MyChannel data={data}/>
        </div>
    );
};

export async function getServerSideProps({query}) {
    let response;
    let data = await fetch(`${ServerDomain}/post/channel-post/${query?.q}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
    response = await data.json()
    console.log(response)
    return {
        props: {
            data: response
        }

    }
}

export default MyChannels;

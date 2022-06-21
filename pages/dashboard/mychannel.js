import MyChannel from "../../components/My-Channel";

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
    let data = await fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/post/channel-post/${query?.q}`, {
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

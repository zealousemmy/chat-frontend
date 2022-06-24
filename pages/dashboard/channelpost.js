import MyChannel from "../../components/My-Channel";

const MyChannels = ({data,info}) => {
    return (
        <div>
            <MyChannel info={info} data={data}/>
        </div>
    );
};

export async function getServerSideProps({query}) {
    let response;
    // if(!query.q){
    //     res.setHeader("location", "/dashboard/channel");
    //     res.statusCode = 302;
    //  return   res.end();
    // }
    // let data = await fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/post/channel-post/${query?.q}`, {
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    // response = await data.json()

    try{
        const [postRes, infoRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/post/channel-post/${query?.q}`),
            fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/get/${query?.q}`)
        ]);
        const [posts, info] = await Promise.all([
            postRes.json(),
            infoRes.json()
        ]);
        return {
            props: {
                data: posts,
                info
            }

        }
    }catch (e) {
        console.log(e)
    }
}

export default MyChannels;

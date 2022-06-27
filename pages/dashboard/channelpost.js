import MyChannel from "../../components/My-Channel";

const MyChannels = ({data,info}) => {
    return (
        <div>
            <MyChannel info={info} data={data}/>
        </div>
    );
};
MyChannel.auth = true
export async function getServerSideProps({query}) {

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

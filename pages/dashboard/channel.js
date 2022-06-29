import React from "react";
import Channels from "../../components/Channels";

const Channel = ({  channelType, contentType}) => {
    return (
        <div>
            <Channels channelType={channelType} contentType={contentType}/>
        </div>
    );
};
Channel.auth = true

export async function getServerSideProps() {
    try {
        const [channelTypeRes, contentTypeRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-type/get`),
            fetch(
                `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel-content-type/get`
            ),
        ]);
        var [channelType, contentType] = await Promise.all([
            channelTypeRes.json(),
            contentTypeRes.json(),
        ])

        return{
            props:{
                channelType,
                contentType
            }
        }
    } catch (e) {
        return {
            props: {}
        }
    }
}

export default Channel;

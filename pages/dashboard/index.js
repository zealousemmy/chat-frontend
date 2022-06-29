import React from "react";
import DashboardComponent from "../../components/Dashboard";

const Dashboard = ({ channels, channelsTrend,error }) => {
  return (
    <div>
      <DashboardComponent  channels={channels} channelsTrend={channelsTrend} error={error}/>
    </div>
  );
};
Dashboard.auth = true
export async function getServerSideProps() {
    try{
    const [channelsRes, channelsTrendRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/get`),
        fetch(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/nav/get-active`)
    ]);
    var [channels, channelsTrend] = await Promise.all([
        channelsRes.json(),
        channelsTrendRes.json()

    ]);
        return { props: { channels, channelsTrend } };
    }catch (e) {
        return { props: {error:e.message}}
    }
}export default Dashboard;

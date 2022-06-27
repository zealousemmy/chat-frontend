import Axios from "axios";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import Container from "../../../universal-components/Container";
import SearchInput from "../../../universal-components/Search-Input";
import Table from "../../../universal-components/Table";
import Card from "../Card";
import NoDataFound from "../NoDataFound";
import { ChannelReviewConfig, COLUMNS, DATA } from "./config";
import {
  ChannelReviewWrapper,
  ChannelReview__Wrapper,
  ChannelReview__WrapperCards,
  ChannelReview__Users,
  ChannelReview__UsersTable,
} from "./style";

const ChannelReview = ({ title }) => {
  const [channels, setChannels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [channelInfoCount, setChannelInfoCount] = useState([]);

  const channelsData = [];

  const getAllPendingData = (pending, channel) => {
    const channels = channel["data"].map((item) => {
      Object.assign(item, {
        channel_type: item.channel_type["name"],
        edit: <BiEdit className="editBtn" />,
      });
    });
    // console.log(channelsData);

    setChannels({
      channel: { ...channel, channels },
      pending,
    });
  };

  const GetAllApiData = () => {
    setLoading(true);
    const endpoints = [
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/get`,
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/pending`,
    ];

    Axios.all(endpoints.map((promises) => Axios.get(promises)))
      .then(
        Axios.spread(({ data: allChannels }, { data: pendingChannels }) => {
          getAllPendingData(pendingChannels, allChannels);

          const approvedChannelsTotal = allChannels["data"].filter(
            (channel) => channel.status === "active"
          ).length;

          const verifiedChannelsTotal = allChannels["data"].filter(
            (channel) => channel.verified === "yes"
          ).length;

          setChannelInfoCount([
            allChannels.total,
            pendingChannels.total,
            approvedChannelsTotal,
            23,
            verifiedChannelsTotal,
          ]);

          setLoading(false);
        })
      )
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetAllApiData();
  }, []);

  useEffect(() => {
    for (let index = 0; index < ChannelReviewConfig.length; index++) {
      ChannelReviewConfig[index]["figure"] = channelInfoCount[index];
    }
  }, [channelInfoCount]);

  return (
    <ChannelReviewWrapper>
      <Container>
        <ChannelReview__Wrapper>
          <h2>{title}</h2>
          <ChannelReview__WrapperCards>
            {loading
              ? "Loading..."
              : ChannelReviewConfig.map(({ label, figure, id }) => (
                  <Card label={label} figure={figure} key={id} />
                ))}
          </ChannelReview__WrapperCards>
        </ChannelReview__Wrapper>
        <ChannelReview__Users>
          <h2>Verified Channels</h2>
          <SearchInput placeholder={"Search for any user"} />
          <ChannelReview__UsersTable>
            {loading ? (
              "Loading..."
            ) : error ? (
              error.message
            ) : channels["channel"].total <= 0 ? (
              <NoDataFound />
            ) : (
              <Table
                data={channels["channel"].data}
                columns={COLUMNS}
                stripped={"#eee"}
              />
            )}
          </ChannelReview__UsersTable>
        </ChannelReview__Users>
      </Container>
    </ChannelReviewWrapper>
  );
};

export default ChannelReview;

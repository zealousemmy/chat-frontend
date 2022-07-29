import Axios from "axios";
import React, { useState, useEffect } from "react";
import NoDataFound from "../NoDataFound";
import Container from "../../../universal-components/Container";
import Jaytech from "../../../asset/images/people1.png";
import {
  ApprovalsWrapper,
  ApprovalsHeader,
  ApprovalsContent,
  ApprovalsCard,
  ApprovalsCard_Image,
  ApprovalsCard_Content,
  ApprovalsCard_Button,
} from "./styles";
import Image from "next/image";

const Approvals = ({ title }) => {
  const [responses, setResponses] = useState({ channels: {} });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [finalPending, setFinalPending] = useState();

  const GetAllApiDetails = () => {
    setLoading(true);
    const endpoints = [
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/pending`,
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/user/get`,
    ];

    Axios.all(endpoints.map((promise) => Axios.get(promise)))
      .then(
        Axios.spread(({ data: pending }, { data: users }) => {
          const pendingApprovalData = [];
          pending["data"].forEach((channel) => {
            users["data"].filter((user) => {
              if (channel.user_id === user.id) {
                pendingApprovalData.push({
                  id: channel.id,
                  channel_img: channel.img,
                  title: channel.title,
                  user_name: user.user_name,
                  created_at: channel.created_at.split("T")[0],
                });
              }
              setFinalPending(pendingApprovalData);
              setLoading(false);
            });
          });
        })
      )
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetAllApiDetails();
  }, []);
  const HandleApproveButton = (id) => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/channel/approve/18/${id}`
    ).then((resp) => {
      if (resp.data["status"] === "success") {
        window.alert(`Channel with ${id} has been approved`);
        window.location.reload();
      } else {
        window.alert(resp.data["message"]);
        window.location.reload();
      }
      setLoading(false);
    });
  };
  return (
    <ApprovalsWrapper>
      <Container>
        <ApprovalsHeader>
          <h2>{title}</h2>
          <p>Manage channel approvals here</p>
        </ApprovalsHeader>
        <ApprovalsContent>
          {loading ? (
            "Loading..."
          ) : error ? (
            error.message
          ) : finalPending.length <= 0 ? (
            <NoDataFound />
          ) : (
            // eslint-disable-next-line react/jsx-key
            finalPending.map((channel) => (
              <ApprovalsCard key={channel.id}>
                <ApprovalsCard_Image>
                  <Image
                    src={channel.channel_img || Jaytech}
                    alt={channel.title}
                    width={77}
                    height={60}
                  />
                </ApprovalsCard_Image>
                <ApprovalsCard_Content>
                  <p>{channel.title}</p>
                  <p>
                    <span>
                      {`${channel.user_name} created this channel on ${channel.created_at}`}
                    </span>
                  </p>
                </ApprovalsCard_Content>
                <ApprovalsCard_Button>
                  <button onClick={() => HandleApproveButton(channel.id)}>
                    Approve
                  </button>
                </ApprovalsCard_Button>
              </ApprovalsCard>
            ))
          )}
        </ApprovalsContent>
      </Container>
    </ApprovalsWrapper>
  );
};

export default Approvals;

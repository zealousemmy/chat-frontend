import Image from "next/image";
import React from "react";
import Container from "../../universal-components/Container";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import { ChannelInviteConfig } from "./Config";
import {
  ChannelInviteWrapper,
  ChannelInviteHeader,
  ChannelInviteContent,
  ChannelInviteCard,
  ChannelInviteCard_Image,
  ChannelInviteCard_Content,
  ChannelInviteCard_Button,
} from "./styles";

const ChannelInvite = () => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <ChannelInviteWrapper>
        <Container>
          <ChannelInviteHeader>
            <h2>Channel Invitations</h2>
            <p>See channels you have been invited to manage</p>
          </ChannelInviteHeader>
          <ChannelInviteContent>
            {ChannelInviteConfig.map((invite) => (
              <ChannelInviteCard key={invite.id}>
                <ChannelInviteCard_Image>
                  <Image
                    src={invite.img}
                    alt={invite.title}
                    width={"80%"}
                    height={"80%"}
                  />
                </ChannelInviteCard_Image>
                <ChannelInviteCard_Content>
                  <p>{invite.title}</p>
                  <p>
                    <span>
                      <b>{invite.subscriber}</b> Subscriber
                      {parseInt(invite.subscriber) >= 2 ? "s" : ""}
                    </span>
                    <span>
                      <b>{invite.post}</b> Post
                      {parseInt(invite.post) >= 2 ? "s" : ""}
                    </span>
                  </p>
                </ChannelInviteCard_Content>
                <ChannelInviteCard_Button>
                  <button className="delete">Delete</button>
                  <button className="accept">Accept</button>
                </ChannelInviteCard_Button>
              </ChannelInviteCard>
            ))}
          </ChannelInviteContent>
        </Container>
      </ChannelInviteWrapper>
    </>
  );
};

export default ChannelInvite;

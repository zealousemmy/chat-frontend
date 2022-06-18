import Image from "next/image";
import React from "react";
import Nav from "../../../universal-components/Nav";
import NavArrayDashboard from "../../../util/New-User-Select-Channel/Nav";
import Container from "../../../universal-components/Container";
import { ApprovalsConfig } from "./Config";

import {
  ApprovalsWrapper,
  ApprovalsHeader,
  ApprovalsContent,
  ApprovalsCard,
  ApprovalsCard_Image,
  ApprovalsCard_Content,
  ApprovalsCard_Button,
} from "./styles";

const Approvals = ({ title }) => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} sidebar={"sidebar"} />
      <ApprovalsWrapper>
        <Container>
          <ApprovalsHeader>
            <h2>{title}</h2>
            <p>Manage channel approvals here</p>
          </ApprovalsHeader>
          <ApprovalsContent>
            {ApprovalsConfig.map((item) => (
              <ApprovalsCard key={item.id}>
                <ApprovalsCard_Image>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={77}
                    height={60}
                  />
                </ApprovalsCard_Image>
                <ApprovalsCard_Content>
                  <p>{item.title}</p>
                  <p>
                    <span>
                      {item.name} created this channel on {item.date}
                    </span>
                  </p>
                </ApprovalsCard_Content>
                <ApprovalsCard_Button>
                  <button>Approve</button>
                </ApprovalsCard_Button>
              </ApprovalsCard>
            ))}
          </ApprovalsContent>
        </Container>
      </ApprovalsWrapper>
    </>
  );
};

export default Approvals;

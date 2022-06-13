import Image from "next/image";
import React from "react";
import Nav from "../../../universal-components/Nav";
import NavArrayDashboard from "../../../util/New-User-Select-Channel/Nav";
import Container from "../../../universal-components/Container";
import { EventsConfig } from "./Config";

import {
  EventsWrapper,
  EventsHeader,
  EventsContent,
  EventsCard,
  EventsCard_Image,
  EventsCard_Content,
  EventsCard_Button,
} from "./styles";

const Events = ({ title }) => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <EventsWrapper>
        <Container>
          <EventsHeader>
            <h2>{title}</h2>
            <button>Add new event</button>
          </EventsHeader>
          <EventsContent>
            <h2>All Events</h2>
            {EventsConfig.map((item) => (
              <EventsCard key={item.id}>
                <EventsCard_Image>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={77}
                    height={60}
                  />
                </EventsCard_Image>
                <EventsCard_Content>
                  <p>{item.title}</p>
                </EventsCard_Content>
                <EventsCard_Button>
                  <button>Delete</button>
                </EventsCard_Button>
              </EventsCard>
            ))}
          </EventsContent>
        </Container>
      </EventsWrapper>
    </>
  );
};

export default Events;

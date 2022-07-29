import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "../../../universal-components/Container";
import Axios from "axios";
import Jaytech from "../../../asset/images/people1.png";
import {
  EventsWrapper,
  EventsHeader,
  EventsContent,
  EventsCard,
  EventsCard_Image,
  EventsCard_Content,
  EventsCard_Button,
} from "./styles";
import NoDataFound from "../NoDataFound";

const Events = ({ title }) => {
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    Axios.get(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/special-event/get`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const HandleDeleteEvent = (id) => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/special-event/delete/${id}`
    )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <>
      <EventsWrapper>
        <Container>
          <EventsHeader>
            <h2>{title}</h2>
            <button>Add new event</button>
          </EventsHeader>
          <EventsContent>
            <h2>All Events</h2>
            {loading ? (
              "Loading..."
            ) : error ? (
              error.message
            ) : events["total"] <= 0 ? (
              <NoDataFound />
            ) : (
              events["data"].map((event) => (
                <EventsCard key={event.id}>
                  <EventsCard_Image>
                    <Image
                      src={event.image || Jaytech}
                      alt={event.caption}
                      width={77}
                      height={60}
                    />
                  </EventsCard_Image>
                  <EventsCard_Content>
                    <p>{event.title}</p>
                  </EventsCard_Content>
                  <EventsCard_Button>
                    <button onClick={() => HandleDeleteEvent(id)}>
                      Delete
                    </button>
                  </EventsCard_Button>
                </EventsCard>
              ))
            )}
          </EventsContent>
        </Container>
      </EventsWrapper>
    </>
  );
};

export default Events;

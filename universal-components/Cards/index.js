import React from "react";
import { withTheme } from "styled-components";
import { CardBody, CardStyles } from "./cards.style";

const Cards = ({ theme: { Color }, CardArray }) => {
  return (
    <CardStyles Color={Color}>
      {CardArray.map((item, key) => (
        <CardBody key={key} Color={Color} bg={item.image}>
          <div className={"cardbody"}>
            <h4>{item.title}</h4>
            <p>{item.channel_description}</p>
            <button>Join +</button>
          </div>
        </CardBody>
      ))}
    </CardStyles>
  );
};

export default withTheme(Cards);

import React from "react";
import { withTheme } from "styled-components";
import { CardBody, CardStyles } from "./cards.style";

const Cards = ({ theme: { Color }, CardArray }) => {
  return (
    <CardStyles Color={Color}>
      {CardArray.map((item, key) => (
        <CardBody
          key={key}
          Color={Color}
          c1={item.c1}
          c2={item.c2}
          c3={item.c3}
          c4={item.c4}
        >
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

import React from "react";
import Accordion from "../../universal-components/Accordion";
import Container from "../../universal-components/Container";
import {
  RulesWrapper,
  RulesWrapperHeader,
  RulesWrapperHeader__top,
  RulesWrapperHeader__bottom,
  RulesWrapperContent,
} from "./styles";
import { RulesRegulationConfig } from "./Config";
const Rules = () => {
  return (
    <RulesWrapper>
      <Container>
        <RulesWrapperHeader>
          <RulesWrapperHeader__top>
            <input type="text" placeholder="Edit your channel rules here" />
          </RulesWrapperHeader__top>
          <RulesWrapperHeader__bottom>
            <button> Create new rule</button>
          </RulesWrapperHeader__bottom>
        </RulesWrapperHeader>
        <RulesWrapperContent>
          <h2>Rules and regulations</h2>
          {RulesRegulationConfig.map(
            ({ id, label, content, avatar, footer, timeApplied }) => (
              <Accordion
                label={label}
                content={content}
                avatar={avatar}
                key={id}
                timeApplied={timeApplied}
                footer={footer}
              />
            )
          )}
        </RulesWrapperContent>
      </Container>
    </RulesWrapper>
  );
};

export default Rules;

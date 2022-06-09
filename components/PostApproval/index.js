import React from "react";
import Accordion from "../../universal-components/Accordion";
import Container from "../../universal-components/Container";
import { ApprovalWrapper, ApprovalWrapperContent } from "./styles";
import { ApprovalRegulationConfig } from "./Config";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";
import Nav from "../../universal-components/Nav";
const PostApproval = () => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <ApprovalWrapper>
        <Container>
          <ApprovalWrapperContent>
            <h1>Post awaiting approval</h1>
            {ApprovalRegulationConfig.map(
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
          </ApprovalWrapperContent>
        </Container>
      </ApprovalWrapper>
    </>
  );
};

export default PostApproval;

import React from "react";
import Container from "../../../universal-components/Container";
import Nav from "../../../universal-components/Nav";
import SearchInput from "../../../universal-components/Search-Input";
import Table from "../../../universal-components/Table";
import NavArrayDashboard from "../../../util/New-User-Select-Channel/Nav";
import Card from "../Card";
import { ChannelReviewConfig, COLUMNS, DATA } from "./config";
import {
  ChannelReviewWrapper,
  ChannelReview__Wrapper,
  ChannelReview__WrapperCards,
  ChannelReview__Users,
  ChannelReview__UsersTable,
  ChannelReview__UsersTableFooter,
} from "./style";

const ChannelReview = ({ title }) => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <ChannelReviewWrapper>
        <Container>
          <ChannelReview__Wrapper>
            <h2>{title}</h2>
            <ChannelReview__WrapperCards>
              {ChannelReviewConfig.map(({ label, figure, id }) => (
                <Card label={label} figure={figure} key={id} />
              ))}
            </ChannelReview__WrapperCards>
          </ChannelReview__Wrapper>
          <ChannelReview__Users>
            <h2>Verified Channels</h2>
            <SearchInput placeholder={"Search for any user"} />

            <ChannelReview__UsersTable>
              <Table data={DATA} columns={COLUMNS} stripped={"#eee"} />
            </ChannelReview__UsersTable>
          </ChannelReview__Users>
        </Container>
      </ChannelReviewWrapper>
    </>
  );
};

export default ChannelReview;

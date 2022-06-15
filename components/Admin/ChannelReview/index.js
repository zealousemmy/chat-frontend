import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Container from "../../../universal-components/Container";
import SearchInput from "../../../universal-components/Search-Input";
import Card from "../Card";
import { COLUMNS, DATA, ChannelReviewConfig } from "./config";
import {
  ChannelReviewWrapper,
  ChannelReview__Users,
  ChannelReview__UsersTable,
  ChannelReview__UsersTableFooter,
  ChannelReview__Wrapper,
  ChannelReview__WrapperCards,
} from "./styles";

const ChannelReview = () => {
  return (
    <ChannelReviewWrapper>
      <Container>
        <ChannelReview__Wrapper>
          <h2>Information Overview</h2>
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
            <table className="ChannelReview__UsersTable-content ">
              <thead className="table-text-header">
                <tr>
                  {COLUMNS.map((column) => (
                    <td key={column.accessor}>{column.Header}</td>
                  ))}
                </tr>
              </thead>
              <tbody className="table-text">
                {DATA.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <span>S/N:</span>
                      {data.id}
                    </td>
                    <td>
                      <span>Channel Name:</span>
                      {data.channelName}
                    </td>
                    <td>
                      <span>Channel Type:</span>
                      {data.channelType}
                    </td>
                    <td>
                      <span>Status:</span>
                      <div className={data.status ? "active" : "inactive"}>
                        {data.status ? "active" : "inactive"}
                      </div>
                    </td>
                    <td>
                      <span>Edit:</span>
                      <BiEdit className="editBtn" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ChannelReview__UsersTableFooter>
              <button className="control">previous</button>
              <button>1</button>
              <button>1</button>
              <button>1</button>
              <button>1</button>

              <button className="control">next</button>
            </ChannelReview__UsersTableFooter>
          </ChannelReview__UsersTable>
        </ChannelReview__Users>
      </Container>
    </ChannelReviewWrapper>
  );
};

export default ChannelReview;

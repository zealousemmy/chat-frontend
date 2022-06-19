import React from "react";
import {
  EmailWrapper,
  Form,
  EmailHeader,
  EmailContent,
  FormRow,
  EmailFooter,
} from "./styles";

import Container from "../../../universal-components/Container";

const Email = ({ title }) => {
  return (
    <>
      <EmailWrapper>
        <Container>
          <Form>
            <EmailHeader>
              <h3 className="header-text-large">{title}</h3>
              <p className="table-text-header">
                Fill in the details to send a broadcast message to all Users
              </p>
            </EmailHeader>

            <EmailContent>
              <FormRow>
                <label className="table-text-header">
                  Subject
                  <input
                    className="table-text-header"
                    type={"text"}
                    placeholder="Write the purpose of the message"
                  />
                </label>
                <label>
                  priority
                  <input
                    className="table-text-header"
                    type={"text"}
                    placeholder="Select the piority level"
                  />
                </label>
              </FormRow>

              <FormRow>
                <label>
                  content
                  <textarea
                    className="table-text-header"
                    rows={5}
                    placeholder="Fill in the message content here"
                  ></textarea>
                </label>
              </FormRow>
            </EmailContent>
            <EmailFooter>
              <button>send message</button>
            </EmailFooter>
          </Form>
        </Container>
      </EmailWrapper>
    </>
  );
};

export default Email;

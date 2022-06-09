import React from "react";
import {
  ContactWrapper,
  Form,
  ContactHeader,
  ContactContent,
  FormRow,
  ContactFooter,
} from "./styles";

import Container from "../../universal-components/Container";
import Footer from "../../universal-components/Footer";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";

const Contact = () => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <ContactWrapper>
        <Container>
          <Form>
            <ContactHeader>
              <h3>Contact us</h3>
              <p>Do you have someyhing to tell us, lets hear it</p>
            </ContactHeader>

            <ContactContent>
              <FormRow>
                <label>
                  Name
                  <input type={"text"} placeholder="Enter your name" />
                </label>
                <label>
                  email
                  <input type={"text"} placeholder="Enter your email" />
                </label>
              </FormRow>
              <FormRow>
                <label>
                  subject
                  <input type={"text"} placeholder="Enter your subject" />
                </label>
              </FormRow>
              <FormRow>
                <label>
                  message
                  <textarea
                    rows={5}
                    placeholder={"FIll in the details of your message here"}
                  ></textarea>
                </label>
              </FormRow>
            </ContactContent>
            <ContactFooter>
              <button>send message</button>
            </ContactFooter>
          </Form>
        </Container>
        <Footer />
      </ContactWrapper>
    </>
  );
};

export default Contact;

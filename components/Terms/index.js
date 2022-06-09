import React from "react";
import Container from "../../universal-components/Container";
import Footer from "../../universal-components/Footer";
import { TermsConfig } from "./config";
import { TermsConditionWrapper } from "./styles";

const Terms = () => {
  return (
    <TermsConditionWrapper>
      <Container>
        <div className="terms__header">
          <h2>Terms and conditions</h2>
        </div>
        <div className="terms__content">
          {TermsConfig.map((terms) => (
            <p key={terms.id}>
              <span>{terms.id}</span>
              <span>{terms.content}</span>
            </p>
          ))}
        </div>

        <Footer />
      </Container>
    </TermsConditionWrapper>
  );
};

export default Terms;

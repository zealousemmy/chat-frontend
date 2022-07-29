import Link from "next/link";
import React from "react";
import { FooterLinksConfig } from "./Config";
import { FooterWrapper, FooterCopyRight, FooterLinks } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        {FooterLinksConfig.map((link) => (
          <Link href={link.path} key={link.path}>
            <a>{link.label}</a>
          </Link>
        ))}
      </FooterLinks>
      <FooterCopyRight>
        Abolle &copy; {new Date().getFullYear()}
      </FooterCopyRight>
    </FooterWrapper>
  );
};

export default Footer;

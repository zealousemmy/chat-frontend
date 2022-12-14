import React from "react";
import { FlexRightStyle } from "./flexright.style";
import { withTheme } from "styled-components";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";

const FlexRightFooter = ({ theme: { Color } }) => {
  return (
    <FlexRightStyle Color={Color}>
      <div className={"flexrightfooter"}>
        <div className={"flexrightlinks"}>
          <div className={"flexrightlink"}>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </div>
          <div className={"flexrightlink"}>
            <Link href={"/termscondition"}>
              <a>Terms and conditions</a>
            </Link>
          </div>
          <div className={"flexrightlink"}>
            <Link href={"/contact"}>
              <a>Contact</a>
            </Link>
          </div>
          <div className={"flexrightlink"}>
            <Link href={"/privacy"}>
              <a>Privacy policy</a>
            </Link>
          </div>
        </div>
        <div className={"flexrightfooterheader"}>
          <h2>
            Abolle <FaRegCopyright /> 2022
          </h2>
        </div>
      </div>
    </FlexRightStyle>
  );
};

export default withTheme(FlexRightFooter);

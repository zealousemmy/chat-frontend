import React from "react";
import { useRouter } from "next/router";
import Approvals from "../../components/Admin/Approvals";
import Email from "../../components/Admin/Email";
import Events from "../../components/Admin/Events";
import ChannelReview from "../../components/Admin/ChannelReview";
import CashoutRequest from "../../components/Admin/Cashout";

export default function Pages() {
  const router = useRouter();
  const page = router.query.pages;
  switch (page) {
    case "approvals":
      return <Approvals title={"approve channels"} />;
      break;
    case "email":
      return <Email title={"emailing"} />;
      break;
    case "review":
      return <ChannelReview title={"channels review"} />;
      break;
    case "events":
      return <Events title={"special events "} />;
      break;
    case "cashouts":
      return <CashoutRequest title={"Cashout request overview"} />;
      break;
    default:
      return (
        <h1
          style={{
            height: "100vh",
            width: "100vw",
            margin: "auto",
            textAlign: "center",
          }}
        >
          404 <br />
          No Screen Found
        </h1>
      );
      break;
  }
}

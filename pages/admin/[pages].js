import React from "react";
import { useRouter } from "next/router";
import Approvals from "../../components/Admin/Approvals";
import Email from "../../components/Admin/email";
import Events from "../../components/Admin/Events";

export default function Pages() {
  const router = useRouter()
  const page = router.query.pages
  switch (page) {
    case "approvals":
      return <Approvals title={"approve channels"} />;
      break;
    case "email":
      return <Email title={"emailing"} />;
      break;
    // case "review":
    //   return <Channels title={"channels review"} />;
    //   break;
    case "events":
      return <Events title={"special events "} />;
      break;
    // case "cashouts":
    //   return <Cashouts title={"Cashout request overview"} />;
    //   break;
  }
}
import React from "react";
import Overview from "../../components/Admin/Overview";
import Nav from "../../universal-components/Nav";
import NavArrayDashboard from "../../util/New-User-Select-Channel/Nav";

const Admin = () => {
  return (
    <>
      <Nav NavArrayContent={NavArrayDashboard} />
      <Overview />;
    </>
  );
};

export default Admin;

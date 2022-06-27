import Image from "next/image";
import React from "react";
import NoDataImage from "../../asset/No-data.svg";

const NoDataFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image src={NoDataImage} alt={"no data"} />
      <h2>No data Found</h2>
    </div>
  );
};

export default NoDataFound;

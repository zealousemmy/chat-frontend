import React from "react";
import Form from "../../../universal-components/Form";
import { PersonalInfoArray } from "../../../util/Settings/Personal Info";

const PersonalInfo = () => {
  return (
    <div className={"info"}>
      <div className={"infoheader"}>
        <h3>Personal Info</h3>
      </div>
      <Form
        FormArray={PersonalInfoArray}
        signature={"setting"}
        width={"100%"}
      />
    </div>
  );
};

export default PersonalInfo;

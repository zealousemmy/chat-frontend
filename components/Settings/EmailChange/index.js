import Form from "../../../universal-components/Form";
import { EmailInfoArray } from "../../../util/Settings/EmailChange";

const EmailInfo = () => {
  return (
    <div className={"info"}>
      <div className={"infoheader"}>
        <h3>Change Email</h3>
      </div>
      <Form FormArray={EmailInfoArray} signature={"setting"} width={"100%"} />
    </div>
  );
};

export default EmailInfo;

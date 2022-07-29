import Form from "../../../universal-components/Form";
import { PasswordInfoArray } from "../../../util/Settings/Password";

const PasswordInfo = () => {
  return (
    <div className={"info"}>
      <div className={"infoheader"}>
        <h3>Change Password</h3>
      </div>
      <Form
        FormArray={PasswordInfoArray}
        signature={"setting"}
        width={"100%"}
        form={"password"}
      />
    </div>
  );
};

export default PasswordInfo;

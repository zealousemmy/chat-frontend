import { ModalStyles } from "./modal.style";
import { CgCloseO } from "react-icons/cg";

const Modals = ({ ModalComponent, setValue }) => {
  const HandleClick = () => {
    setValue(false);
  };

  return (
    <ModalStyles>
      {/* <div className="modal-background"> */}
      <div className={"modal-content"}>
        <CgCloseO className={"icon"} onClick={HandleClick} />
        <ModalComponent className={"modal-component"} />
      </div>
      {/* </div> */}
    </ModalStyles>
  );
};

export default Modals;

import { ModalStyles } from "./modal.style";
import { CgCloseO } from "react-icons/cg";

const Modals = ({ ModalComponent, setValue }) => {
  const HandleClick = () => {
    setValue(false);
  };

  return (
    <ModalStyles>
      <div className={"modal-content"}>
        <CgCloseO onClick={HandleClick} className={"icon"} />
        <ModalComponent />
      </div>
    </ModalStyles>
  );
};

export default Modals;

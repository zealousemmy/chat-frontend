import { ModalStyles } from "./modal.style";
import { CgCloseO } from "react-icons/cg";

const Modals = ({ ModalComponent, setValue, HandleChange, HandleSubmit }) => {
  const HandleClick = () => {
    setValue(false);
  };

  return (
    <ModalStyles>
      <div className={"modal-content"}>
        <CgCloseO className={"icon"} onClick={HandleClick} />
        <ModalComponent
          className={"modal-component"}
          HandleChange={HandleChange}
          HandleSubmit={HandleSubmit}
        />
      </div>
    </ModalStyles>
  );
};

export default Modals;

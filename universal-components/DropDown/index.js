import { DropDownStyles } from "./dropdown.style";
import { useState } from "react";
import { withTheme } from "styled-components";
import { FaCaretDown } from "react-icons/fa";

const DropDown = ({ theme: { Color }, details }) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(details);
  const selectItem = ["select channel", "business", "channel"];

  const HandleShow = () => {
    setShow(!show);
  };

  const HandleClick = (item) => {
    setSelect(item);
  };
  return (
    <DropDownStyles Color={Color} onClick={HandleShow}>
      <div className={"dropdownheader"}>
        <p>{select}</p>
        <FaCaretDown />
      </div>
      {show && (
        <div className={"dropdownitembody"}>
          {selectItem.map((item, key) => (
            <div
              key={key}
              className={"dropdownitem"}
              onClick={() => HandleClick(item)}
            >
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      )}
    </DropDownStyles>
  );
};

export default withTheme(DropDown);

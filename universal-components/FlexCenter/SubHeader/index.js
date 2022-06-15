import { useState } from "react";
import { withTheme } from "styled-components";
import { SubHeaderStyles } from "./subheader";
import { FaCaretDown } from "react-icons/fa";

const FlexCenterSubHeader = ({ theme: { Color }, details, selectItem }) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(details);

  const HandleShow = () => {
    setShow(!show);
  };

  const HandleClick = (item) => {
    setSelect(item);
  };

  // window.onclick = () => {
  //   if (show === "true") {
  //     setShow(false);
  //   }
  // };

  return (
    <SubHeaderStyles Color={Color}>
      <hr />
      <div className={"optionbody"}>
        <p>Sort by:</p>
        <div onClick={HandleShow} className={"dropdownbody"}>
          <div className={"dropdownheader"}>
            <h3>{select} </h3>
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
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SubHeaderStyles>
  );
};

export default withTheme(FlexCenterSubHeader);

import React from "react";
import { useCallback, useState } from "react";
import { withTheme } from "styled-components";
import { SubHeaderStyles } from "./subheader";
import { FaCaretDown } from "react-icons/fa";

const FlexCenterSubHeader = ({
  theme: { Color },
  show,
  HandleShow,
  details,
  selectItem,
  SetChannelSelected,
}) => {
  // const [show, setShow] = useState(false);
  const [select, setSelect] = useState(details[0].title);

  // const HandleShow = () => {
  //   setShow(!show);
  // };

  const HandleClick = useCallback((item, id) => {
    setSelect(item);
    SetChannelSelected(id);
  }, []);

  // window.onclick = () => {
  //   if (show === "true") {
  //     setShow(false);
  //   }
  // };

  return (
    <SubHeaderStyles Color={Color}>
      <div className={"optionbody"}>
        <div onClick={HandleShow} className={"dropdownbody"}>
          <div className={"dropdownheader"}>
            <hr />
            <p>Sort by:</p>
            <h3>{select} </h3>
            <FaCaretDown />
          </div>
          {show && (
            <div className={"dropdownitembody"}>
              {details.map((item, key) => (
                <div
                  key={key}
                  className={"dropdownitem"}
                  onClick={() => HandleClick(item.title, item.id)}
                >
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SubHeaderStyles>
  );
};

export default withTheme(React.memo(FlexCenterSubHeader));

import React from "react";
import { useCallback, useState } from "react";
import { withTheme } from "styled-components";
import { SubHeaderStyles } from "./subheader";
import { FaCaretDown } from "react-icons/fa";

<<<<<<< HEAD
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
=======
const FlexCenterSubHeader = ({ theme: { Color }, details, selectItem,SetChannelSelected }) => {
    const [show, setShow] = useState(false);
  const [select, setSelect] = useState(details[0].name);
>>>>>>> c75c9cf8ab68e4cf19fc2c5798a943822a5b5001

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
            <p>Trending Channels:</p>
            <h3>{select} </h3>
            <FaCaretDown />
          </div>
          {show && (
            <div className={"dropdownitembody"}>
              {details.map((item, key) => (
                <div
                  key={key}
                  className={"dropdownitem"}
<<<<<<< HEAD
                  onClick={() => HandleClick(item.title, item.id)}
=======
                  onClick={() => HandleClick(item.name,item.id)}
>>>>>>> c75c9cf8ab68e4cf19fc2c5798a943822a5b5001
                >
                  <h3>{item.name}</h3>
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

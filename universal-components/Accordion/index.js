import Image from "next/image";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { AccordionWrapper } from "./Styles";

const Accordion = ({ label, content, avatar, timeApplied, footer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionWrapper isActive={isActive}>
      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setIsActive(!isActive)}
        >
          {avatar && (
            <div className="accordion-header__avatar">
              <Image src={avatar} alt={label} width={"70px"} height={"70px"} />
            </div>
          )}
          <div className="accordion-header__text">
            <span>
              <b>{label}</b>
            </span>
            {timeApplied && <span>{timeApplied}</span>}
          </div>
          <div>{isActive ? <FaCaretUp /> : <FaCaretDown />}</div>
        </div>
        {isActive && (
          <div className="accordion-content">
            {content}
            {footer && (
              <div className="accordion-content__footer">
                {footer.map(({ type, label }) => (
                  <button key={Math.random()} className={type}>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </AccordionWrapper>
  );
};

export default Accordion;

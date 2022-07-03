import React, { useRef, useState, useEffect } from "react";
export const OutsideContext = React.createContext();
export const ToggleDropDown = React.createContext();
export const ButtonContext = React.createContext();

const ClickOutsideContext = ({ children }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (buttonRef.current && buttonRef.current.contains) {
        if (buttonRef.current.contains(event.target)) {
          return;
        }
      }
      if (clickRef.current && clickRef.current.contains) {
        if (!clickRef.current.contains(event.target)) {
          setDropDownOpen(false);
          // console.log("CLICK OUTSIDE!!!");
        }
      }
    });
  });
  const clickRef = useRef("myref");

  // need a ref to put on drop down button to handle simultaneous open + close on click
  const buttonRef = useRef("buttonref");
  return (
    <>
      <OutsideContext.Provider value={clickRef}>
        <ToggleDropDown.Provider value={{ dropDownOpen, setDropDownOpen }}>
          <ButtonContext.Provider value={buttonRef}>
            {children}
          </ButtonContext.Provider>
        </ToggleDropDown.Provider>
      </OutsideContext.Provider>
    </>
  );
};

export default ClickOutsideContext;

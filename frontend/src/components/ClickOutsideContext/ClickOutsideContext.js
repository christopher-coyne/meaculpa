import React, { useRef, useState, useEffect } from "react";
export const OutsideContext = React.createContext();
export const ToggleDropDown = React.createContext();

const ClickOutsideContext = ({ children }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (clickRef.current && clickRef.current.contains) {
        if (!clickRef.current.contains(event.target)) {
          setDropDownOpen(false);
          // console.log("CLICK OUTSIDE!!!");
        }
      }
    });
  });
  const clickRef = useRef("myref");
  return (
    <>
      <OutsideContext.Provider value={clickRef}>
        <ToggleDropDown.Provider value={{ dropDownOpen, setDropDownOpen }}>
          {children}
        </ToggleDropDown.Provider>
      </OutsideContext.Provider>
    </>
  );
};

export default ClickOutsideContext;

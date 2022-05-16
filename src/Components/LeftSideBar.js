import React, { useState } from "react";
import ContextHOC from "../Helper/ContextProvider";

import { LeftSideBarTheme as Theme } from "../Theme/theme";

const { Context } = ContextHOC();

const SideIcon = props => {
  const [isHover, setHover] = useState(false);
  if (!props.children || props.children.length) {
    return null;
  }

  return (
    <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={Object.assign({ ...Theme.SideIcon }, isHover && Theme.SideIconHover)}>
        <svg
          style={{ width: "20px", height: "20px" }}
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {props.children}
        </svg>
      </div>
    </li>
  );
};

const LeftSideBar = () => {
  return (
    <div style={Theme.MainContainer}>
      <Context.Consumer>
        {/* `element` in `LeftSideBar` are added in path: src\Helper\ContextProvider.js */}
        {({ LeftSideBar: SideBarActions = [] } = {}) => (
          <ul style={Theme.Container}>
            {SideBarActions.map(({ element }, key) => (
              <SideIcon key={key}>{element}</SideIcon>
            ))}
          </ul>
        )}
      </Context.Consumer>
      <div style={Theme.BottomSection} />
    </div>
  );
};

export default LeftSideBar;

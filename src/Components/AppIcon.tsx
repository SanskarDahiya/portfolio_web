import React, { useState, useEffect } from "react";
const height = 65;
const width = height;
const rotateClassName = "rotate-10-sec";
let ref: NodeJS.Timeout | undefined;
const AppIcon = (props: { initials: string }) => {
  const [rotateClass, setRotateClass] = useState(rotateClassName);
  const initials = props.initials;
  useEffect(() => {
    ref = setTimeout(() => {
      setRotateClass("");
    }, 5020);
    return () => {
      clearTimeout(ref);
      ref = undefined;
    };
  }, [rotateClass]);
  //   TODO: Add Link Here
  return (
    <div
      style={{
        width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseEnter={() => setRotateClass(rotateClassName)}
    >
      <div style={{ position: "absolute" }}>{initials}</div>
      <svg
        id="app-icon-cover"
        className={rotateClass}
        role="img"
        viewBox="0 0 84 96"
      >
        <g transform="translate(-8, -2)">
          <g transform="translate(11, 5)">
            <polygon
              fill="none"
              stroke="black"
              strokeWidth="5"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            ></polygon>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AppIcon;

import { useState, useEffect } from "react";
const height = 50;
const width = height * 0.875;
const rotateClassName = "rotate-10-sec";
let ref;
const AppIcon = props => {
  const [rotateClass, setRotateClass] = useState(rotateClassName);
  const initials = props.initials;
  useEffect(() => {
    ref && clearTimeout(ref);
    ref = setTimeout(() => {
      setRotateClass("");
    }, 5020);
    return () => clearTimeout(ref);
  }, [rotateClass]);
  //   TODO: Add Link Here
  return (
    <div
      style={{ position: "relative", height, width }}
      onMouseEnter={() => {
        setRotateClass(rotateClassName);
      }}
    >
      <div
        style={{
          position: "absolute",
          height,
          width,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>{initials}</div>
      </div>
      <svg id="app-icon-cover" className={rotateClass} role="img" viewBox="0 0 84 96">
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <polygon fill="none" stroke="black" strokeWidth="5" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AppIcon;

import { useContext, useMemo } from "react";
import ContextHOC from "./contextFile";
const { Context } = ContextHOC();

const characterMove = name => {
  if (name.length < 3) {
    return name;
  }
  return (
    <div
    // onMouseEnter={() => {
    //   console.log("Mouse Enter");
    // }}
    // onMouseLeave={() => {
    //   console.log("Mouse Leave");
    // }}
    >
      {name}
    </div>
  );
};

const modifyName = name => {
  const characters = [];
  console.log("🚀 ~ file: App.js ~ line 14 ~ props.name", name);
  if (name && name.trim()) {
    const names = name.split(" ");
    names.forEach(name => {
      name = (name || "").toLowerCase();
      name = name.split("");
      name[0] = (name[0] || "").toUpperCase();
      characters.push(name.join(""));
    });
  }
  return characters;
  //   return characters.join(" ");
};

export const Header = () => {
  const { name } = useContext(Context);
  const modifiedName = useMemo(() => modifyName(name), [name]);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      <div
        style={{
          display: "flex",
          marginLeft: "2%",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        {modifiedName.map((name, key) => (
          <div key={key}>{characterMove(name)}</div>
        ))}
      </div>

      <div>Side Details</div>
    </div>
  );
};

import { useContext, useMemo } from "react";
import ContextHOC from "../Helper/ContextProvider";
const { Context } = ContextHOC();

const modifyName = name => {
  const characters = [];
  name = (name || "").trim();
  if (name) {
    const names = name.split(" ");
    names.forEach(name => {
      name = (name || "").toLowerCase();
      name = name.split("");
      name[0] = (name[0] || "").toUpperCase();
      characters.push(name.join(""));
    });
  }
  return characters.join(" ");
};

export const Header = () => {
  const { name } = useContext(Context);
  const generatedName = useMemo(() => modifyName(name), [name]);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#3457D5",
        color: "white",
        justifyContent: "space-between",
        width: "100%"
      }}
    >
      {generatedName}
      <div>Side Menu Options</div>
    </div>
  );
};

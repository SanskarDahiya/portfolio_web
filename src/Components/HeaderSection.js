import { useContext, useMemo } from "react";
import ContextHOC from "../Helper/ContextProvider";
import AppIcon from "./AppIcon";

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
  let initials = "";
  if (characters[0] && characters[0][0]) {
    initials += characters[0][0];
  }
  if (characters.length > 1) {
    const lastElem = characters.length - 1;
    if (characters[lastElem] && characters[lastElem][0]) {
      initials += characters[lastElem][0];
    }
  }
  initials = initials.toUpperCase();
  return { name: characters.join(" "), initials };
};

export const Header = () => {
  const { name: currentName } = useContext(Context);
  const { name, initials } = useMemo(() => modifyName(currentName), [currentName]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2px"
      }}
    >
      <AppIcon initials={initials} />
      <div>{JSON.stringify(name)}</div>
    </div>
  );
};

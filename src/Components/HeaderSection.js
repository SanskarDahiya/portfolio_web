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
const subHeading = { padding: "5px", margin: "5px" };

const subHeader = [
  { title: "Experience", route: "", isSpecial: false },
  { title: "Work", route: "", isSpecial: false },
  { title: "Contact", route: "", isSpecial: false },
  { title: "Resume", route: "", isSpecial: true }
];
export const Header = () => {
  let { name: currentName } = useContext(Context);
  const { name, initials } = useMemo(() => modifyName(currentName), [currentName]);
  if (subHeader[0].title !== name) {
    subHeader.unshift({ title: name });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2px"
      }}
    >
      <AppIcon initials={initials} />
      <div style={{ display: "flex", padding: "10px" }}>
        {subHeader.map(({ title }, key) => {
          return (
            <div key={key} style={subHeading}>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

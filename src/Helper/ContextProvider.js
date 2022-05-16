import { createContext } from "react";
import userData from "../userDetails.json";
import AppIconList from "./AppIconList";

let Context = {};

/*** Adding React Icon For Side Menu */
userData.LeftSideBar = userData.LeftSideBar.map(data => {
  data.element = AppIconList[data.title];
  return data;
});

const dataProvider = {
  default: userData
};

const ContextHOC = name => {
  if (!name || typeof name !== "string") {
    name = "default";
  }
  const data = dataProvider[name];
  if (!Context[name]) {
    Context[name] = { Context: createContext(data), data };
  }

  return Context[name];
};

export default ContextHOC;

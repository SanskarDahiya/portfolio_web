import { createContext } from "react";
import userData from "../userDetails.json";

let Context = {};

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

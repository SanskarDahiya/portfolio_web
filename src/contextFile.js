import React from "react";
import profileDetail from "./profileDetail.json";

let Context;
const ContextHOC = ({ singlton = true } = {}) => {
  singlton = singlton === false ? false : true;
  const data = profileDetail;
  if (!(singlton && Context)) {
    Context = React.createContext(data);
  }
  return { Context, data };
};

export default ContextHOC;

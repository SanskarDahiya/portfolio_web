import React, { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import SectionWrapper from "./Sections/SectionWrapper";
import Components from "./index";
import { PageDataInterface } from "../constants/data";

const Layouts = (props: PageDataInterface) => {
  const hideSection = props.hideSection;
  const components = props.Components;
  const params = useParams();
  const loc = useLocation();

  return (
    <Fragment>
      {!hideSection && <SectionWrapper />}
      {components?.map((name: any, index: number) => {
        const Comp = Components[name];
        if (Comp) return <Comp key={index} />;
        return null;
      })}
      <hr style={{ padding: "100px" }} />
      {JSON.stringify({ params, loc })}
      <hr />
    </Fragment>
  );
};

export default Layouts;

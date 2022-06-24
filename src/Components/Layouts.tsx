import React, { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import SectionWrapper from "./Sections/SectionWrapper";
import Components from "./index";
import { PageDataInterface } from "../constants/data";

const Layouts = (props: PageDataInterface) => {
  const { title, hideSection, Components: components } = props;
  const queryParams = useParams();
  const locationData = useLocation();

  return (
    <Fragment>
      {!hideSection && <SectionWrapper />}
      {components?.map((name: any, index: number) => {
        const Comp = Components[name];
        if (Comp) return <Comp key={index} />;
        throw new Error(`[Lauout] No Component found name [${name}] for [${title}]`);
      })}
      <hr style={{ padding: "100px" }} />
      {JSON.stringify({ params: queryParams, loc: locationData })}
      <hr />
    </Fragment>
  );
};

export default Layouts;

import { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import SectionWrapper from "./Sections/SectionWrapper";
import Sections from "./Sections";
import { PageDataInterface } from "../constants/data";

const Layouts = (props: PageDataInterface) => {
  const { title, hideSection, Components: SectionNames } = props;
  const queryParams = useParams();
  const locationData = useLocation();

  return (
    <Fragment>
      {!hideSection && <SectionWrapper />}
      {SectionNames?.map((name: any, index: number) => {
        const Component = Sections[name];
        if (Component) return <Component key={index} />;
        throw new Error(`[Lauout] No Component found name [${name}] for [${title}]`);
      })}
      <hr style={{ padding: "100px" }} />
      {JSON.stringify({ params: queryParams, loc: locationData })}
      <hr />
    </Fragment>
  );
};

export default Layouts;

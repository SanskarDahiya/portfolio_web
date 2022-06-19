import { Link } from "react-router-dom";

interface section {
  title?: string;
  links?: {
    link: string;
    title?: string;
  }[];
}

const SectionWrapper = (props: section) => {
  return (
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content text-center">
            <h2>{props?.title}</h2>
            {props?.links && (
              <div className="page_link">
                {props.links.map(({ link, title }, index) => {
                  return <Link to={link}>{title}</Link>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;

import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { getSectionLinks } from "../../constants/data";

const SectionWrapper = () => {
  const { pathname } = useLocation();
  const SectionLinks = useMemo(() => getSectionLinks(pathname), [pathname]);
  return (
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content text-center">
            <h2>{SectionLinks?.title}</h2>
            {SectionLinks?.links.length ? (
              <div className="page_link">
                {SectionLinks.links.map(({ link, title }, index) => {
                  return (
                    <Link to={link} key={title + index}>
                      {title}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;

import { Fragment } from "react";
import { Link } from "react-router-dom";
const SERVICES_OFFERED = {
  title: "service offers",
  description: [
    "Is give may shall likeness made yielding spirit a itself togeth created after sea",
    "is in beast beginning signs open god you're gathering ithe"
  ],
  services: [
    {
      link: "#",
      src: "img/services/s1.png",
      alt: "",
      title: "Wp developing",
      description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
      link: "#",
      src: "img/services/s2.png",
      alt: "",
      title: "",
      description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
      link: "#",
      src: "img/services/s3.png",
      alt: "",
      title: "Web design",
      description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    },
    {
      link: "#",
      src: "img/services/s4.png",
      alt: "",
      title: "",
      description: "Creeping for female light years that lesser can't evening heaven isn't bearing tree"
    }
  ]
};
function ServicesOffered() {
  const { title, description, services } = SERVICES_OFFERED;
  return (
    <section className="features_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              <h2>{title}</h2>
              <p>
                {description?.map((elem, key) => (
                  <Fragment key={key}>
                    {elem}
                    <br />
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="row feature_inner">
          {services?.map(({ link, src, alt, title, description }, key) => {
            return (
              <Link to={link} key={key} className="col-lg-3 col-md-6">
                <div className="feature_item">
                  <img src={src} alt={alt || src} />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesOffered;

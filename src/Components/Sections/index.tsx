import { Link } from "react-router-dom";
interface Home_Section {
  name?: string;
  title?: string;
  buttons?: {
    link: string;
    title: string;
  }[];
}

const HOME_SECTION_DATA = {
  name: "Rahi Satner",
  title: "senior wordpress developer",
  buttons: [
    {
      link: "#",
      title: "Hire Me",
    },
    {
      link: "#",
      title: "Get CV",
    },
  ],
} as Home_Section;

export default function Section() {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">Hell0</h3>
                {HOME_SECTION_DATA?.name && (
                  <h1 className="text-uppercase">
                    I am {HOME_SECTION_DATA.name}
                  </h1>
                )}
                {HOME_SECTION_DATA?.title && (
                  <h5 className="text-uppercase">{HOME_SECTION_DATA.title}</h5>
                )}
                {HOME_SECTION_DATA?.buttons && (
                  <div className="d-flex align-items-center">
                    {HOME_SECTION_DATA.buttons.map(({ link, title }, index) => {
                      return (
                        <Link
                          className={`primary_btn ${
                            index % 2 !== 0 && "tr-bg"
                          }`}
                          to={link}
                          key={index}
                        >
                          <span>{title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img">
                <img src="img/banner/home-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Fragment } from "react";
import { Link } from "react-router-dom";
const ABOUT_US = {
  heading: ["let’s", "Introduce about", "myself"],
  description: [
    "Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.",
    "Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two."
  ],
  buttons: [{ link: "/", title: "Download CV" }]
};
export default function AboutUs() {
  const { heading, description, buttons } = ABOUT_US;
  return (
    <section className="about_area section_gap">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5">
            <div className="about_img">
              <img src="img/about-us.png" alt="" />
            </div>
          </div>
          <div className="offset-lg-1 col-lg-5">
            <div className="main_title text-left">
              <h2>
                {heading?.map((elem, key) => (
                  <Fragment key={key}>
                    {elem}
                    <br />
                  </Fragment>
                ))}
              </h2>
              {description?.map((elem, key) => (
                <p key={key}>{elem}</p>
              ))}
              {buttons?.map(({ link, title }, index) => {
                return (
                  <Link className={`primary_btn ${index % 2 !== 0 && "tr-bg"}`} to={link} key={index}>
                    <span>{title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

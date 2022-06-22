import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_DATA } from "../constants/data";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                {FOOTER_DATA.image && (
                  <Link to={FOOTER_DATA.image.url || "/"}>
                    <img src={FOOTER_DATA.image.image} alt={FOOTER_DATA.image.title || "Footer Image"} />
                  </Link>
                )}
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                {FOOTER_DATA.refLinks.map(({ url = "/", link, className }, index) => {
                  const Icon = <i className={"fa " + className} />;
                  if (link) {
                    return (
                      <a href={link} target="_blank" rel="noreferrer" key={index}>
                        {Icon}
                      </a>
                    );
                  }
                  return (
                    <Link to={url} key={index}>
                      {Icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);

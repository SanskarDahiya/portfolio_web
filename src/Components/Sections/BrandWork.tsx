import React from "react";
import { Link } from "react-router-dom";
const BRAND_WORK = {
  brands: [
    { link: "#", src: "img/brands/logo1.png", alt: "" },
    { link: "#", src: "img/brands/logo2.png", alt: "" },
    { link: "#", src: "img/brands/logo3.png", alt: "" },
    { link: "#", src: "img/brands/logo4.png", alt: "" },
    { link: "#", src: "img/brands/logo5.png", alt: "" },
    { link: "#", src: "img/brands/logo6.png", alt: "" },
    { link: "#", src: "img/brands/logo7.png", alt: "" },
    { link: "#", src: "img/brands/logo8.png", alt: "" },
    { link: "#", src: "img/brands/logo9.png", alt: "" }
  ],
  phoneNumber: "(+91) 123-456-789",
  experience: "2+"
};
export default function BrandWork() {
  const { brands, phoneNumber, experience } = BRAND_WORK;

  return (
    <section className="brand_area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 row justify-content-center align-items-center">
            <div className="row">
              {brands?.map(({ src, link, alt }, key) => {
                return (
                  <Link key={key} to={link} className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src={src} alt={alt || src} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="offset-lg-1 col-lg-4 col-md-6">
            <div className="client-info">
              {experience != null && (
                <div className="d-flex mb-50">
                  <span className="lage">{experience}</span>
                  <span className="smll">Years Experience Working</span>
                </div>
              )}
              {phoneNumber && (
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone" />
                  </div>
                  <div className="ml-15">
                    <p>call us now</p>
                    <h3>{phoneNumber}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

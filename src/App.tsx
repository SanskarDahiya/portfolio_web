import React, { Fragment } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";

function Abcd() {
  const params = useParams();
  const loc = useLocation();
  return (
    <div style={{ padding: "100px" }}>
      Hello
      <hr />
      {JSON.stringify({ params, loc })}
      <hr />
    </div>
  );
}
function App() {
  return (
    <Fragment>
      <Header />
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#">
                      <span>Hire Me</span>
                    </a>
                    <a className="primary_btn tr-bg" href="#">
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src="img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>Portfolio Details</h2>
              <div className="page_link">
                <a href="index.html">Home</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="portfolio-details.html">Portfolio Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Abcd />} />
        <Route path="about" element={<Abcd />} />
        <Route path="*" element={<Abcd />} />
      </Routes>
    </Fragment>
  );
}

export default App;

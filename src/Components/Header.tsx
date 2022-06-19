import { Link, useLocation } from "react-router-dom";
import AppIcon from "./AppIcon";

const HEADING_DATA = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/portfolio",
    title: "Portfolio",
  },
  {
    link: "/pages",
    title: "Pages",
    subLink: [
      {
        link: "#elements",
        title: "Elements",
      },
      {
        link: "#portfolio-details",
        title: "Portfolio Details",
      },
    ],
  },
  {
    link: "/blog",
    title: "Blog",
    subLink: [
      {
        link: "#blog",
        title: "Blog",
      },
      {
        link: "#single-blog",
        title: "Single Blog",
      },
    ],
  },
  {
    link: "/contacts",
    title: "Contact",
  },
];

interface headerElement {
  link: string;
  title: string;
  subLink?: { link: string; title: string }[];
}

const HeaderElement = ({ link, title, subLink }: headerElement) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;
  const isDropDown = !!subLink;
  //   className="nav-item submenu dropdown">
  // className="nav-link dropdown-toggle"
  return (
    <li
      className={`nav-item ${isActive && "active"} ${
        isDropDown && "submenu dropdown"
      }`}
    >
      <Link className={`nav-link ${isDropDown && "dropdown-toggle"}`} to={link}>
        {title}
      </Link>
      {isDropDown && (
        <ul className="dropdown-menu">
          {subLink.map((data, index) => {
            return (
              <HeaderElement {...data} link={link + data.link} key={index} />
            );
          })}
        </ul>
      )}
    </li>
  );
};

function Header() {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <a className="navbar-brand logo_h" href="/">
              <AppIcon initials="" />
              {/* <img src="img/logo.png" alt="" /> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                {HEADING_DATA.map((data, index) => (
                  <HeaderElement {...data} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

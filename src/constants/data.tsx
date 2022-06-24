export interface SectionWrapperLinksInterface {
  link: string;
  title: string;
}
export interface SectionWrapperInterface {
  title: string;
  links: SectionWrapperLinksInterface[];
}

export interface PageDataInterface {
  link: string;
  title: string;
  heading?: string;
  hideSection?: boolean;
  Components?: string[];
}

const HOME = {
  link: "/",
  title: "Home",
  hideSection: true,
  Components: ["HomeSection", "AboutUs", "BrandWork"]
} as PageDataInterface;

const ABOUT = {
  link: "/about",
  title: "About",
  heading: "About Us"
  // Components: ["About"]
} as PageDataInterface;

const SERVICES = {
  link: "/services",
  title: "Services"
  // Components: ["Services"]
} as PageDataInterface;

const PORTFOLIO = {
  link: "/portfolio",
  title: "Portfolio"
} as PageDataInterface;

const PAGES = {
  link: "/pages",
  title: "Pages"
} as PageDataInterface;

const BLOG = {
  link: "/blog",
  title: "Blog"
} as PageDataInterface;

const CONTACT = {
  link: "/contacts",
  title: "Contact"
};

export const HEADING_DATA = [HOME, ABOUT, SERVICES, PORTFOLIO, PAGES, BLOG, CONTACT] as PageDataInterface[];

export const FOOTER_DATA = {
  image: {
    url: "/",
    image: "img/logo.png",
    title: "Footer Image"
  },
  refLinks: [
    {
      url: "/",
      link: "/",
      className: "fa-facebook"
    },
    {
      className: "fa-twitter"
    },
    {
      className: "fa-dribbble"
    },
    {
      className: "fa-instagram"
    },
    {
      className: "fa-behance"
    }
  ]
};

export const API_MAPPING = HEADING_DATA.reduce(
  (acc, value) => {
    acc[value.link] = value;
    return acc;
  },
  {} as {
    [key: string]: PageDataInterface;
  }
);

export const getSectionLinks = (pathname: string): SectionWrapperInterface => {
  const paths = pathname.split("/").map(path => {
    path = "/" + path;
    const elem = API_MAPPING[path];
    return {
      link: elem.link,
      title: elem.title
    } as SectionWrapperLinksInterface;
  });
  const elem = API_MAPPING[pathname];

  return { title: elem.heading || elem.title, links: paths };
};

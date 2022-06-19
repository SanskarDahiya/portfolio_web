import SectionWrapper from "./SectionWrapper";

interface Home_Section {
  title?: string;
  links?: {
    link: string;
    title?: string;
  }[];
}

const Services_SECTION_DATA = {
  title: "Portfolio",
  links: [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/portfolio",
      title: "Portfolio",
    },
  ],
} as Home_Section;

export default function PortfolioSection() {
  return <SectionWrapper {...Services_SECTION_DATA} />;
}

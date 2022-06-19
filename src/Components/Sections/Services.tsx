import SectionWrapper from "./SectionWrapper";

interface Home_Section {
  title?: string;
  links?: {
    link: string;
    title?: string;
  }[];
}

const Services_SECTION_DATA = {
  title: "Services Us",
  links: [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/services",
      title: "Services",
    },
  ],
} as Home_Section;

export default function ServicesSection() {
  return <SectionWrapper {...Services_SECTION_DATA} />;
}

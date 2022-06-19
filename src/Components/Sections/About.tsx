import SectionWrapper from "./SectionWrapper";

interface Home_Section {
  title?: string;
  links?: {
    link: string;
    title?: string;
  }[];
}

const ABOUT_SECTION_DATA = {
  title: "About Us",
  links: [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/about",
      title: "About",
    },
  ],
} as Home_Section;

export default function AboutSection() {
  return <SectionWrapper {...ABOUT_SECTION_DATA} />;
}

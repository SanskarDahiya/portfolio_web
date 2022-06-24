import React from "react";
import AboutUs from "./AboutUs";
import BrandWork from "./BrandWork";
import HomeSection from "./HomeTitle";
import ServicesOffered from "./ServicesOffered";

export default {
  ServicesOffered,
  BrandWork,
  AboutUs,
  HomeSection
} as {
  [key: string]: React.ComponentType;
};

import React from "react";
import AboutUs from "./AboutUs";
import BrandWork from "./BrandWork";
import HomeSection from "./HomeTitle";

export default {
  BrandWork,
  AboutUs,
  HomeSection
} as {
  [key: string]: React.ComponentType;
};
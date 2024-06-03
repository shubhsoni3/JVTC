import React from "react";
import FeatureCarousel from "../Slider/FeatureCarousel";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function FeaturesSectionStyle4({
  sectionTitleUp,
  sectionTitle,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <FeatureCarousel data={data} />
    </div>
  );
}

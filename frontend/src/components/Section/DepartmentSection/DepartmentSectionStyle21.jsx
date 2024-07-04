import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import IconBoxStyle21 from "../../IconBox/IconBoxStyle21";

export default function DepartmentSectionStyle1({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-4">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <Spacing md="72" lg="50" />
        </div>
        {data?.map((item, index) => (
          <div className="col-md-6 col-xl-4" key={index}>
            <IconBoxStyle21 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

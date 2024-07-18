import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import IconBoxStyle6 from "../../IconBox/IconBoxStyle6";

export default function FeaturesSectionStyle2({ sectionTitle, videoUrl, imgUrl, data }) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_1" />
      <div className="container">
        <div className="row flex-xl-row flex-column-reverse">
          <div className="col-xl-5">
            <div className="cs_pr_95 text-center cs_img_filed">
              {videoUrl ? (
                <video
                  className="cs_radius_30"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline

                  style={{ width: "100%", borderRadius: "30px",}}
                />
              ) : (
                <img src={imgUrl} alt={sectionTitle} className="cs_radius_30" />
              )}
            </div>
           
          </div>
          <div className="col-xl-7">
            <SectionHeading title={sectionTitle} />
            <Spacing md="45" lg="50" xl="20" />
            <div className="row">
              {data?.map((item, index) => (
                <div className="col-lg-12" key={index}>
                  <IconBoxStyle6 {...item} />
                  <Spacing md="85" lg="60" xl="35" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

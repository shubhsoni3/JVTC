import React from "react";
import parse from "html-react-parser";

export default function BannerSectionStyle3({
  bgUrl,
  imgUrl,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  return (
    <section
      className="cs_banner cs_style_3 cs_bg_filed"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      {/* <div className="cs_banner_img">
        <img src={imgUrl} alt="Banner" className="cs_main_banner_img" />
      </div> */}
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
          <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
            {parse(subTitle)}
          </p>
        </div>
      </div>
    </section>
  );
}

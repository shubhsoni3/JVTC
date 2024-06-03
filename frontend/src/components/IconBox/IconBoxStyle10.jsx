import React from "react";
import Rating from "../Rating";

export default function IconBoxStyle10({
  Name,
  subTitles,
  title,
  ratingNumber,
  subTitle,
}) {
  return (
    <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg text-center">
      <div className=" cs_center rounded-circle mb-3">
        <Rating ratingNumber={ratingNumber} />
      </div>
      {/* <h2 className="cs_iconbox_title">{title}</h2> */}
      <h2 className="cs_iconbox_title">{Name}</h2>
      {/* <p className="cs_iconbox_subtitle mb-0">{subTitle}</p> */}
      <p className="cs_iconbox_subtitle mb-0">{subTitles}</p>
    </div>
  );
}

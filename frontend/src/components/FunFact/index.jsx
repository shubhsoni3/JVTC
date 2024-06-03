import React from "react";

export default function FunFact({ number, title }) {
  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h2 className="cs_funfact_numbers cs_fs_72">{number}</h2>
      <p className="cs_funfact_title m-0 cs_heading_colors">{title}</p>
    </div>
  );
}

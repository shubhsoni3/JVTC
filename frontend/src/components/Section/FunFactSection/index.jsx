import React from "react";
import FunFact from "../../FunFact";

export default function FunFactSection({ bgUrl, data }) {
  return (
    <>
      <div className="container">
        <div
          className="cs_funfact_1_wrap cs_radius_30 cs_bg_filed"
          // style={{
          //   background:
          //     "url('/images/home_1/Meeting.jpg') no-repeat center center",
          //   backgroundSize: "cover",
          style={{
            backgroundImage:
              "linear-gradient(270deg, #e12454 0%, #9d1976 100%)",
          }}
        >
          {data?.map((item, index) => (
            <FunFact key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

import React from "react";
import IconBoxStyle11 from "../../IconBox/IconBoxStyle11";
import Spacing from "../../Spacing";

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle={<a href="tel:+91-7770877117">+91-7770877117</a>}
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle={
              <a href="mailto:fertilitycenterjbp@gmail.com">
                fertilitycenterjbp@gmail.com
              </a>
            }
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="199-A,Jabalpur Fertility Centre,Napier Town Jabalpur"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.237923697546!2d79.91985837477428!3d23.161514911129952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afaaed668fef%3A0x17d5b76ba8c47290!2sJabalpur%20Fertility%20Center!5e0!3m2!1sen!2sin!4v1716893562394!5m2!1sen!2sin"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}

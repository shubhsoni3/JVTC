import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        199-A,Jabalpur Fertility Centre,Opposite <br /> Madan Mahal Thana , Home
        Science <br /> College Road, Napier Town Jabalpur,
        <br /> 482001, Madhya Pradesh
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        <Link to="tel:+91-7770877117">+91-7770877117</Link>
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        <Link to="tel:+91-9826135501">+91-9826135501</Link>
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        <Link to="mailto:fertilitycenterjbp@gmail.com">
          fertilitycenterjbp@gmail.com
        </Link>
      </li>
    </ul>
  );
}

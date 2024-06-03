import { Icon } from "@iconify/react";
import React from "react";

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
        +91 - 9826553302
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        dr.archanashrivastav@gmail.com
      </li>
    </ul>
  );
}

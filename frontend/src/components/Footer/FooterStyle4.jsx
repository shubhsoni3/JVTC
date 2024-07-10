import React from "react";
import TextWidget from "../Widget/TextWidget";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import SocialWidget from "../Widget/SocialWidget";
import MenuWidget from "../Widget/MenuWidget";
import NewsletterStyle4 from "../Widget/NewsletterStyle4";
import styled from "styled-components";
import { Link } from "react-router-dom";

const menuDataOne = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Doctors", href: "/doctors/doctor-details" },
  { title: "Gallery", href: "/gallery" },
  { title: "Appointment", href: "/appointments" },
];

const menuDataTwo = [
  { title: "Your Querise", href: "/Querise" },
  { title: "Are You Want Solution", href: "/Solution" },
  { title: "Patient Review", href: "/Review" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];
const menuDataFour = [
  { title: "Counslling", href: "/Counselling" },
  { title: "Complete Fertility Workup", href: "/CompleteWorkup" },
  { title: "IVF", href: "/IVF" },
  { title: "Hysteroscopy & Laparoscopy Treatment", href: "/Hysteroscopy" },
  { title: "ICSI", href: "/ICSI" },
  { title: "Laparoscopic Removal", href: "/LaparoscopyRemoval" },
];
const menuDataThree = [
  { title: "Privacy Policy", href: "/" },
  { title: "Terms and Conditions", href: "/" },
];

export default function FooterStyle4() {
  const date = new Date();
  const year = date.getUTCFullYear();

  return (
    <Container>
      <footer className="cs_footer cs_style_2 cs_type_1 cs_accent_bg cs_white_color">
        <div className="container">
          <TextWidget
            logoUrl="/images/logofooter1.png"
            text="Fertility Clicic & Test Tube Baby Center"
            // heading= "JABALPUR IVF CENTER"
          />
          <div className="Footers">
            <NewsletterStyle4 title="JABALPUR IVF CENTER" subTitle="" />
          </div>
          <div className="cs_footer_in">
            <div className="cs_footer_col">
              <div className="cs_footer_item">
                <ContactInfoWidget />
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataFour} />
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataThree} />
                <SocialWidget />
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom">
          <div className="container">
            <div className="cs_copyright">
              <Link to="/Admin-Login">
                Copyright © {year} DOAGuru Infosystems. All rights reserved.
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .Footers {
      margin-top: -40px;
    }
  }
`;

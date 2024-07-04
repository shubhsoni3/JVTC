import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import ContactForm from "../ContactForm";
import Section from "../Section";
import ContactInfoSection from "../Section/ContactInfoSection";
import { pageTitle } from "../../helpers/PageTitle";

export default function Contact() {
  pageTitle("Contact");
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/HeroContacts.png"
        // imgUrl="/images/contact/banner_img.png"
        title="Contact Us"
        subTitle="Reach out to us for the fastest response and top-tier treatment. Your health and satisfaction are our priority—contact us now to experience exceptional care!"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section>
    </>
  );
}

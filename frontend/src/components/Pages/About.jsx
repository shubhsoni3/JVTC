import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
const departmentData = [
  {
    title: "Diagnostic testing",
    subTitle:
      "Blood tests, imaging studies, and other tests to diagnose health conditions",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Rehabilitation services",
    subTitle:
      "Physical therapy, occupational therapy, and other services to help patients recover from injuries",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Preventive care",
    subTitle:
      "Annual checkups, immunizations, and health screenings care preventive",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Treatment for acute and chronic conditions",
    subTitle:
      "Medication management, disease management, and other treatments to improve health outcomes",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Mental health services",
    subTitle:
      "Counseling, therapy, and other services to help patients manage mental health conditions",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
];

const featureListData = [
  {
    title: "Dr. Archana Shrivastav",
    subTitle:
      "Well located in Jabalpur, Madhya Pradesh, we Dr. Archana Shrivastav are known to be the best and most effective treatment provider. As a result of which the patients trusts and well connect with us. Our areas of specialisation include gynaecology and gastroenterology. We provide perfect care to the patients and help them to get rid of the problem through which they are suffering from. Our objective is to deal with various health problems encountered by number of people. The technical and architectural designing of this clinic has been done specifically to provide the benefit of an excellent health care system. We are very prominent in our service. Our clinic has achieved eminence in this industry because of our clients' belief and trust. Book an appointment today for a healthier tomorrow!",
    iconUrl: "images/icons/professional.svg",
  },
  // {
  //   title: "Comprehensive <br />Services",
  //   subTitle:
  //     "We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.",
  //   iconUrl: "images/icons/comprehensive.svg",
  // },
  // {
  //   title: "Patient-centered <br />Approach",
  //   subTitle:
  //     "We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.",
  //   iconUrl: "images/icons/patient.svg",
  // },
  // {
  //   title: "State-of-the-art <br />Facilities",
  //   subTitle:
  //     "Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.",
  //   iconUrl: "images/icons/facilities.svg",
  // },
];

const funFactData = [
  { number: "20+", title: "Years of experience" },
  { number: "95%", title: "Patient satisfaction rating" },
  { number: "5000+", title: "Patients served annually" },
  { number: "10+", title: "Healthcare providers on staff" },
  { number: "22+", title: "Convenient locations in the area" },
];

const teamData = [
  // {
  //   imgUrl: "images/about/doctor_1.png",
  //   name: "Dr. James Lee, MD",
  //   designation: "Head of Cardiologist",
  //   description:
  //     "With expertise in managing complex heart conditions and performing advanced cardiac procedures",
  //   social: [
  //     { icon: "fa6-brands:facebook-f", href: "/about" },
  //     { icon: "fa6-brands:linkedin-in", href: "/about" },
  //     { icon: "fa6-brands:twitter", href: "/about" },
  //   ],
  // },
  {
    imgUrl: "images/about/Dr.Archana.png",
    name: "Dr. Archana Shrivastav",
    designation: "Emergency Medicine Physician",
    description:
      "With expertise in treating acute illnesses and injuries in medicine physician",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  // {
  //   imgUrl: "images/about/doctor_3.png",
  //   name: "Dr. Susan Bones, MD",
  //   designation: "Board-certified Pediatrician",
  //   description:
  //     "With experience in managing complex medical conditions in children",
  //   social: [
  //     { icon: "fa6-brands:facebook-f", href: "/about" },
  //     { icon: "fa6-brands:linkedin-in", href: "/about" },
  //     { icon: "fa6-brands:twitter", href: "/about" },
  //   ],
  // },
];

const galleryData = [
  { imgUrl: "/images/about/IMG_3267.JPG" },
  { imgUrl: "/images/about/IMG_3206.JPG" },
  { imgUrl: "/images/about/IMG_3181.JPG" },
  { imgUrl: "/images/about/IMG_3156.JPG" },
  { imgUrl: "/images/about/IMG_3116.JPG" },
  { imgUrl: "/images/about/IMG_3115.JPG" },
  { imgUrl: "/images/about/IMG_3045.JPG" },
  { imgUrl: "/images/about/IMG_2986.JPG" },
  { imgUrl: "/images/about/IMG_2975.JPG" },
  { imgUrl: "/images/about/IMG_3156.JPG" },
  { imgUrl: "/images/about/IMG_3116.JPG" },
];
const awardData = [
  {
    iconUrl: "/images/icons/award.svg",
    title: "Malcolm Baldrige National Quality Award",
  },
  { iconUrl: "/images/icons/award.svg", title: "HIMSS Davies Award" },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Healthgrades National’s Best Hospital",
  },
  {
    iconUrl: "/images/icons/award.svg",
    title: "Joint Commission Gold Seal of Approval",
  },
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/AboutBanner_bg.png"
        // imgUrl="/images/about/banner_img.png"
        title="Welcome to <br />Jabalpur Fertility Center"
        subTitle="Unlock Your IVF Journey: Experience Wellness, Hope, and Success with Us!"
      />

      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="About Jabalpur Fertility Center"
          imgUrl="/images/icons/JAbalpurFertilityCentre.png"
          data={featureListData}
        />
      </Section>

      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>

      {/* <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section> */}

      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Winning Awards and <br />Recognition"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
      <Section
        topMd={170}
        topLg={120}
        topXl={80}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>

      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section> */}
    </>
  );
}

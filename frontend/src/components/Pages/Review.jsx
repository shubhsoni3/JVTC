import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import DepartmentSectionStyle21 from "../Section/DepartmentSection/DepartmentSectionStyle21";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import FeaturesSectionStyle4 from "../Feature/FeaturesSectionStyle4";
const departmentData = [
  {
    iconUrl: "/images/icons/Review1.png",
  },
  {
    iconUrl: "/images/icons/Review2.png",
  },
  {
    iconUrl: "/images/icons/Review3.png",
  },
  {
    iconUrl: "/images/icons/Review4.png",
  },
  {
    iconUrl: "/images/icons/Review5.png",
  },
  {
    iconUrl: "/images/icons/Review6.png",
  },
  {
    iconUrl: "/images/icons/Review7.png",
  },
  {
    iconUrl: "/images/icons/Review8.png",
  },
  {
    iconUrl: "/images/icons/Review9.png",
  },
  {
    iconUrl: "/images/icons/Review10.png",
  },
  {
    iconUrl: "/images/icons/Review11.png",
  },
];

const featureListData = [
  {
    iconUrl: "/images/home_4/compassion.svg",
    title: "Advance Infrastructure",
    subTitle:
      "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.",

    subTitles:
      "'I got the best possible treatment and owe it to the Doctor and Staff! I sincerely followed his diagnosis and recommended treatment and it worked wonders! Very caring and concerned!'",
    ratingNumber: "5",
    Name: "Kavita Sinha",
  },
  {
    iconUrl: "/images/home_4/excellence.svg",
    title: "High IVF Success Rate",
    subTitle:
      "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, and resources to ensure that we deliver the highest quality care possible.",

    subTitles:
      "'The Gynecologist took a great care  of me throught out my pregnacies. would definitely recommend others.'",
    ratingNumber: "4.5",
    Name: "Preeti Singh",
  },
  {
    iconUrl: "/images/home_4/integrity.svg",
    title: "Cost Effective",
    subTitle: `We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first.`,
    subTitles:
      "'ONe of my freind suggest this gynecologist after we had some trouble conceiving children.But now after their effective treatment I am very happy'",
    ratingNumber: "4.0",
    Name: "Sonia Mehra",
  },
  {
    iconUrl: "/images/home_4/respect.svg",
    title: "Transparency",
    subTitle:
      "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
    subTitles:
      "'I got the best possible treatment and owe it to the Doctor and Staff! I sincerely followed his diagnosis and recommended treatment and it worked wonders! Very caring and concerned!'",
    ratingNumber: "5",
    Name: "Kavita Sinha",
  },
  {
    iconUrl: "/images/home_4/teamwork.svg",
    title: "Support",
    subTitle:
      "We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.",
    subTitles:
      "'The Gynecologist took a great care  of me throught out my pregnacies. would definitely recommend others.'",
    ratingNumber: "4.5",
    Name: "Preeti Singh",
  },
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <Section
        topMd={190}
        topLg={145}
        topXl={125}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        style={{
          background:
            "url('/images/home_1/heroBg.png') no-repeat center center",
          backgroundSize: "contain",
          padding: "25px",
        }}
      >
        <FeaturesSectionStyle4
          sectionTitle="What Our Patients Say <br />About Us"
          sectionTitleUp="TESTIMONIALS"
          data={featureListData}
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <DepartmentSectionStyle21
          sectionTitle="Provides Our Happy Patients"
          sectionTitleUp="Reviews"
          data={departmentData}
        />
      </Section>
    </>
  );
}

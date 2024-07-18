import React from "react";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
const blogData = [
  {
    title: "Symptoms before period: important information",
    thumbUrl: "images/blog/post_1.jpeg",
    date: "March 12 , 2024",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  // {
  //   title: `Why does stomach ache before periods?`,
  //   thumbUrl: "images/blog/post_2.jpeg",
  //   date: "March 11 , 2024",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "Why does PCOS occur? Causes and preventive measures",
  //   thumbUrl: "images/blog/post_3.jpeg",
  //   date: "March 9 , 2024",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "Managing Chronic Pain: Treatment Options and Strategies",
  //   thumbUrl: "images/blog/post_4.jpeg",
  //   date: "March 8",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "Understanding and Managing Diabetes: Tips for Healthy Living",
  //   thumbUrl: "images/blog/post_5.jpeg",
  //   date: "March 5",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "The Role of Physical Therapy in Injury Recovery and Prevention",
  //   thumbUrl: "images/blog/post_6.jpeg",
  //   date: "March 2",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "Breaking the Stigma: Raising Awareness for Mental Health Issues",
  //   thumbUrl: "images/blog/post_7.jpeg",
  //   date: "Feb 28",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "Allergies and Asthma: Causes, Symptoms, and Treatment Options",
  //   thumbUrl: "images/blog/post_8.jpeg",
  //   date: "Feb 26",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "Caring for Your Skin: Tips for Healthy, Glowing Skin",
  //   thumbUrl: "images/blog/post_9.jpeg",
  //   date: "Feb 25",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
];

export default function Blog() {
  pageTitle("Blog");
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Psychology and Life Style" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={blogData} />
      </Section>
      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section> */}
    </>
  );
}

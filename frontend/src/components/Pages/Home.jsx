import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import FunFactSection from "../Section/FunFactSection/index";
import Section from "../Section";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
import FeaturesSectionStyle5 from "../Feature/FeaturesSectionStyle5";
import TeamSection from "../Section/TeamSection";
import ContactInfoSection from "../Section/ContactInfoSection";
import FeaturesSectionStyle4 from "../Feature/FeaturesSectionStyle4";
import styled from "styled-components";
import Spacing from "../Spacing";

const featureListData = [
  {
    iconUrl: "/images/home_4/compassion.svg",
    title: "Advance Infrastructure",
    subTitle:
      "We understand that seeking medical care can be a stressful experience, and we strive to provide world-class infrastructure to achieve the best results for our patients.",

    subTitles:
      "'I got the best possible treatment and owe it to the Doctor and Staff! I sincerely followed his diagnosis and recommended treatment and it worked wonders! Very caring and concerned!'",
    ratingNumber: "5",
    Name: "Kavita Sinha",
  },
  {
    iconUrl: "/images/home_4/excellence.svg",
    title: "High IVF Success Rate",
    subTitle:
      "We believe in continuously updating our technologies and improving our skills and resources to ensure that we deliver the quality care possible. We are happy and proud to say that we have been providing excellent IVF success rates.",

    subTitles:
      "'The Gynecologist took a great care  of me throught out my pregnacies. would definitely recommend others.'",
    ratingNumber: "4.5",
    Name: "Preeti Singh",
  },
  {
    iconUrl: "/images/home_4/integrity.svg",
    title: "Cost Effective",
    subTitle: `We believe in practicing medicine with integrity and honesty. We have designed comprehensive, highly affordable packages with the aim of providing advanced fertility services to as many people as possible.`,
    subTitles:
      "'ONe of my freind suggest this gynecologist after we had some trouble conceiving children.But now after their effective treatment I am very happy'",
    ratingNumber: "4.0",
    Name: "Sonia Mehra",
  },
  {
    iconUrl: "/images/home_4/respect.svg",
    title: "Transparency",
    subTitle:
      "We treat all individuals with respect, compassion, and kindness, regardless of their background, beliefs, or circumstances. We are transparent in our communications and decision-making processes, and we always put our patients' interests first.",
    subTitles:
      "'I got the best possible treatment and owe it to the Doctor and Staff! I sincerely followed his diagnosis and recommended treatment and it worked wonders! Very caring and concerned!'",
    ratingNumber: "5",
    Name: "Kavita Sinha",
  },
  {
    iconUrl: "/images/home_4/teamwork.svg",
    title: "Support",
    subTitle:
      "We believe in providing a comprehensive support system, thus providing everything from basic treatment to advanced care. We have a highly skilled team to ensure in-depth investigations, perfect individualized treatment plans, advanced endoscopic fertility-enhancing surgeries, the highest quality fertility treatment, and excellent management of high-risk pregnancies.",
    subTitles:
      "'The Gynecologist took a great care  of me throught out my pregnacies. would definitely recommend others.'",
    ratingNumber: "4.5",
    Name: "Preeti Singh",
  },
];
// const brandData = [
//   { imgUrl: "images/brand_1.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_2.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_3.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_4.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_5.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_6.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_7.png", imgAlt: "Brand" },
//   { imgUrl: "images/brand_8.png", imgAlt: "Brand" },
// ];

const faqData = [
  {
    title: "What services does Jabalpur IVF Centre offer?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I schedule an appointment with Jabalpur IVF Centre?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "Do you accept insurance?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How do I request a prescription refill?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
];
const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: "images/blog/post_2.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: "images/blog/post_2.jpeg",
    date: "May 4, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: "images/blog/post_2.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
];
const departmentData = [
  {
    title: "Emergency Department",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Pediatric Departement",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Gynecology Department",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Cardiology Department",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Neurology Department",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Psychiatry Department",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
];
const teamData = [
  {
    imgUrl: "images/about/DrShrivastavMaam.jpg",
    name: "Dr. Archana Shrivastav MBBS , DGO",
    // designation: "Emergency Medicine Physician",
    description:
      "Dr. Archana Shrivastav has 24 years of experience in Obstetrics, Gynecology, and Laparoscopy, specializing in fertility treatment and advanced laparoscopic surgeries.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];
const funFactData = [
  { number: "15+", title: "Years of experience" },
  { number: "95%", title: "Patient satisfaction rating" },
  { number: "5000+", title: "Patients served annually" },
  { number: "10+", title: "Healthcare providers on staff" },
  // { number: "22+", title: "Convenient locations in the area" },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Container>
        {/* Start About Section */}
        <Hero
          title="SPREADING THE JOY OF MOTHERHOOD"
          subTitle="We are committed to providing the best technology to achieve great results in IVF and fertility treatments for infertile couples in our city and beyond."
          bgUrl="/images/home_1/hero_bg.png"
          videoBtnText="See how we work"
          videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
          infoList={[
            {
              title: "Patient Name",
              subTitle: "Shivani Tiwari",
              iconUrl: "/images/icons/ambulance.svg",
            },
          ]}
          dateList={[
            {
              title: "Booking Date",
              date: "dd-mm-yyyy",
              iconUrl: "/images/icons/appointment_icon_x.svg",
            },
          ]}
          contactList={[
            {
              title: "Mobile Number",
              contact: "7000XXXXXX",
              iconUrl: "/images/contact/icon_1.svg",
            },
          ]}
          btnText="Book Now"
          btnUrl="/appointments"
        />
        {/* End Hero Section */}

        {/* Start About Section */}
        <Section>
          <div className="mt-lg-5">
            <AboutSection
              imgUrl="/images/home_1/AboutIVF.png"
              spiningImgUrl="/images/home_1/about_mini.svg"
              title="About"
              subTitle="Jabalpur Fertility Center"
              featureList={[
                {
                  // featureListTitle:
                  //   "ProHealth is a team of experienced medical professionals",
                  featureListSubTitle:
                    "Well located in the heart of Jabalpur, Madhya Pradesh, Jabalpur Fertility Center are one of the oldest and best treatment provider. As a result of which the patients trusts and well connect with us. Our areas of specialisation include gynaecology and gastroenterology. We provide perfect care to the patients and help them to get rid of the problem through which they are suffering from. Our objective is to deal with various health problems encountered by number of people. The technical and architectural designing of this clinic has been done specifically to provide the benefit of an excellent health care system. We are very prominent in our service. Our clinic has achieved eminence in this industry because of our clients' belief and trust. Book an appointment today for a healthier tomorrow!",
                },
              ]}
            />
          </div>
        </Section>
        {/* End About Section */}

        {/* Start Banner Section */}
        <Section>
          <Spacing md="72" lg="50" />
          <FunFactSection
            bgUrl="images/about/fun_fact_bg.jpeg"
            data={funFactData}
          />
        </Section>

        {/* <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section> */}
        {/* End Banner Section */}

        {/* Start Feature Section */}
        <Section
          topMd={185}
          topLg={140}
          topXl={100}
          bottomMd={200}
          bottomLg={150}
          bottomXl={100}
          className="cs_gray_bg_1"
        >
          <FeaturesSectionStyle5
            sectionTitle="Why Choose Us"
            data={featureListData}
          />
        </Section>

        {/* <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section> */}
        {/* End Feature Section */}

        {/* Start Departments Section */}
        <Section topMd={185} topLg={150} topXl={110}>
          <DepartmentSection
            sectionTitle="Expertise in Treatment of"
            bgUrl="images/home_1/JabalpuIVF.png"
            data={departmentData}
            titleStyle={{ color: "#fff" }}
          />
        </Section>
        {/* End Departments Section */}

        {/* Start Award Section */}
        {/* <Section topMd={185} topLg={140} topXl={100}>
          <AwardSection sectionTitle="Departments" data={awardData} />
        </Section> */}
        {/* End Award Section */}

        {/* Start Doctor Section */}
        <Section
          topMd={190}
          topLg={145}
          topXl={105}
          bottomMd={170}
          bottomLg={120}
          bottomXl={80}
          className="cs_gray_bg_1"
        >
          <TeamSection
            sectionTitle="Experts Doctor"
            sectionTitleUp="MEET OUR"
            data={teamData}
          />
        </Section>
        {/* End Doctor Section */}

        {/* Start Testimonial */}

        <Section
          style={{
            background:
              "url('/images/home_1/heroBg.png') no-repeat center center",
            backgroundSize: "cover",
            padding: "25px",
          }}
        >
          <FeaturesSectionStyle4
            sectionTitle="What Our Patients Say <br />About Us"
            sectionTitleUp="TESTIMONIALS"
            data={featureListData}
          />
        </Section>

        {/* Will Be Removing Testimonial */}
        {/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle3
          sectionTitle="What Our Patients Say <br />About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section> */}

        {/* Will Be Removing Testimonial */}
        {/* <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section> */}
        {/* End Testimonial */}

        {/* Start Blog Section */}
        <Section topMd={190} topLg={145} topXl={105}>
          <BlogSection
            sectionTitle="Latest Update"
            sectionTitleUp="BLOG POSTS"
            data={blogData}
          />
        </Section>
        {/* End Blog Section */}

        {/* Start Appointment Section */}
        <Section topMd={190} topLg={145} topXl={105} id="appointment">
          <AppointmentSection
            sectionTitle="Appointment"
            sectionTitleUp="BOOK AN"
            imgUrl="/images/home_1/appointment.png"
          />
        </Section>
        {/* End Appointment Section */}

        {/* Start FAQ Section */}

        <Section topMd={185} topLg={145} topXl={105}>
          <FaqSectionStyle4
            sectionTitle="Frequently Asked <br />Questions"
            data={faqData}
            faqImgUrl="/images/home_4/faq_img.jpeg"
            spiningImgUrl="/images/home_1/about_mini.svg"
          />
        </Section>

        {/* Will Be Deleted This Section */}
        {/* <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section> */}
        {/* End FAQ Section */}

        {/* Start Brand Section */}
        {/* <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={100}
        bottomXl={50}
      >
        <BrandsSection data={brandData} />
      </Section> */}
        {/* End Brand Section */}

        {/* {Start Contact Map} */}
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
        {/* {End Contact Map} */}
      </Container>
    </>
  );
}

const Container = styled.div``;

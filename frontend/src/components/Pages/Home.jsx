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

const faqData = [
  {
    title: "What services does Jabalpur IVF Centre offer?",
    content:
      "Jabalpur IVF Centre offers a range of fertility treatments and services to help individuals and couples achieve pregnancy. These services typically include in vitro fertilization (IVF), intrauterine insemination (IUI), fertility testing and diagnosis, egg and sperm donation, embryo freezing, intracytoplasmic sperm injection (ICSI), preimplantation genetic testing (PGT), and counseling and support services.",
  },
  {
    title: "How do I schedule an appointment with Jabalpur IVF Centre?",
    content:
      "To schedule an appointment with Jabalpur IVF Centre, you can visit their official website and use their online appointment booking system. Alternatively, you can call the centre directly to speak with a representative who can assist you in scheduling an appointment. It is also possible to visit the centre in person to arrange an appointment.",
  },
  {
    title: "Do you accept insurance?",
    content:
      "Jabalpur IVF Centre's policy on accepting insurance may vary, so it is best to contact the centre directly to inquire about their insurance policies. They can provide information on whether they accept your insurance plan and what services are covered. It is also advisable to check with your insurance provider to understand your coverage for fertility treatments.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "When attending your appointment at Jabalpur IVF Centre, it is important to bring a valid ID, such as a driver's license or passport, and your insurance card if applicable. Additionally, bring any relevant medical records or test results, a list of current medications you are taking, and a list of any questions or concerns you have about your treatment.",
  },
  {
    title: "How do I request a prescription refill?",
    content:
      "To request a prescription refill from Jabalpur IVF Centre, you can call the centre and speak with a nurse or medical assistant who can process your request. Some centres may also offer an online portal where you can request refills. Be sure to have your prescription information handy when making the request.",
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
  // {
  //   title: "Healthy Eating on a Budget: Tips and Strategies",
  //   thumbUrl: "images/blog/post_2.jpeg",
  //   date: "May 4, 2023",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
  // {
  //   title: "The Importance of Regular Cancer Screenings and Early Detection",
  //   thumbUrl: "images/blog/post_2.jpeg",
  //   date: "May 1, 2023",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  //   socialShare: true,
  // },
];
const departmentData = [
  // {
  //   title: "Counslling",
  //   iconUrl: "images/home_1/department_icon_1.svg",
  //   href: "/Counselling",
  // },
  {
    title: "Complete Fertility Workup",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/CompleteWorkup",
  },
  {
    title: "IUI",
    iconUrl: "images/home_1/department_icon_10.svg",
    href: "/IUI",
  },
  {
    title: "IVF",
    iconUrl: "images/home_1/department_icon_3.png",
    href: "/IVF",
  },
  {
    title: "ICSI",
    iconUrl: "images/home_1/department_icon_7.svg",
    href: "/ICSI",
  },
  {
    title: "EmbryoDonation",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/EmbryoDonation",
  },
  {
    title: "Hysteroscopy & Laparoscopy Treatment",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/Laparoscopy",
  },
  {
    title: "Tesa / Pesa",
    iconUrl: "images/home_1/department_icon_8.svg",
    href: "/TesaPesa",
  },
  {
    title: "Laparoscopic Removal",
    iconUrl: "images/home_1/department_icon-9.svg",
    href: "/LaparoscopyRemoval",
  },
];

const teamData = [
  {
    imgUrl: "images/about/DrArchnaShrivastav.JPG",
    name: "Dr. Archana Shrivastav MBBS , DGO",
    // designation: "Emergency Medicine Physician",
    description:
      "Dr. Archana Shrivastav has 24 years of experience in Obstetrics, Gynecology, and Laparoscopy, specializing in fertility treatment and advanced laparoscopic surgeries.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "https://m.facebook.com/jabalpurfertilitycentre/" },
      { icon: "fa6-brands:linkedin-in", href: "https://www.linkedin.com/in/jabalpur-fertility-centre-97504a227/" },
      { icon: "fa6-brands:twitter", href: "https://x.com/jabalpurivf1" },
    ],
  },
];

const funFactData = [
  { number: '15+', title: 'Years of experience', start: 0, duration: 10.5 },
  { number: '95%', title: 'Patient satisfaction rating', start: 0, duration: 8.5 },
  { number: '5000+', title: 'Patients served annually', start: 0, duration: 6.5 },
  { number: '10+', title: 'Healthcare providers on staff', start: 0, duration: 10.5 },
];

export default function Home() {

  pageTitle("Home");
  return (
    <>
      <Container>
        {/* Start Hero Section */}
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
          <div className="mt-5">
            <AboutSection
              imgUrl="/images/home_1/AboutJBpIVF.png"
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
      style={{
        // backgroundImage: `linear-gradient(#e12454 100%),`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data={funFactData}
    />
       </Section>
        {/* End Banner Section */}

        {/* Start Why Choose US Section */}
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
        {/* End Why Choose US Section */}

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
        {/* End FAQ Section */}

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

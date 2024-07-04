import React from "react";
import Section from "../Section";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import ContactForm from "../ContactForm";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";
import BlogSection from "../Section/BlogSection";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle5 from "../Feature/FeaturesSectionStyle5";

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
    title: "What is the purpose of fertility counselling?",
    content:
      "Fertility counselling aims to provide emotional support, guidance, and education to individuals and couples experiencing fertility issues. It helps address the emotional challenges associated with infertility, assist in making informed decisions about treatment options, and offers coping strategies for managing stress and anxiety during the fertility journey.",
  },
  {
    title: "How can fertility counselling help me during my treatment?",
    content:
      "Fertility counselling can help you by providing a safe space to express your feelings, offering techniques to manage stress and anxiety, and guiding you through the emotional ups and downs of treatment. Regular sessions can help you stay emotionally balanced and supported, ensuring you are better prepared to handle the outcomes of your fertility treatments.",
  },
  {
    title: " Is fertility counselling confidential?",
    content:
      "Yes, all counselling sessions at Jabalpur Fertility Centre are completely confidential. Your privacy is of utmost importance to us, and we ensure that your personal information and discussions during counselling remain secure and private.",
  },
  {
    title: "When should I consider seeking fertility counselling",
    content:
      "You should consider seeking fertility counseling before, during, and after fertility treatments, as well as anytime you feel overwhelmed, anxious, or need emotional support related to fertility issues.",
  },
  {
    title:
      "How do I schedule a counselling session at Jabalpur Fertility Centre?",
    content:
      "To schedule a counselling session, you can contact Jabalpur Fertility Centre directly. Our compassionate team is here to assist you in booking an appointment at a convenient time. You can reach us through our website, phone, or by visiting our clinic in person.",
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
    title: "Emotional Support",
    subTitle:
      "Coping strategies, managing stress and anxiety, dealing with disappointment.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Education",
    subTitle:
      "Information about IVF procedures, success rates, risks, and side effects to help you make informed decisions.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Psychological Preparation",
    subTitle:
      " Preparing mentally for each stage of the IVF process, handling hormonal changes.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Relationship Support",
    subTitle:
      "Helping you and your partner navigate the impact of IVF on your relationship, enhancing communication and mutual support.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Ethical and Legal Guidance",
    subTitle:
      "Discussing ethical considerations, legal implications, and consent forms.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
  {
    title: "Long-term Planning",
    subTitle:
      "Assisting with future family planning, including discussions on parenthood and explaining IVF to future children.",
    iconUrl: "/images/icons/calendar_white.svg",
    href: "/departments/department-details",
  },
];
export default function Counselling() {
  pageTitle("Counselling");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/AboutBanner_bg.png"
        // imgUrl="/images/about/banner_img.png"
        title="Welcome to Jabalpur<br /> Fertility Center"
        subTitle="Counselling Services at Jabalpur Fertility Centre"
      />

      <Section topMd={200} topLg={150} topXl={110}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_blog_details">
                <h1>Empowering Your Fertility Journey:</h1>
                <h2> Compassionate Counseling at Jabalpur Fertility Centre</h2>
                <p>
                  At Jabalpur Fertility Centre, we understand that dealing with
                  fertility issues can be emotionally challenging. Our dedicated
                  counselling services are designed to provide you with
                  compassionate support, guidance, and resources throughout your
                  fertility journey. Led by experienced counsellors and under
                  the expert guidance of Dr. Archana Shrivastav, the Best IVF
                  Doctor in Jabalpur, our counselling team is committed to
                  addressing your emotional needs and helping you make informed
                  decisions about your fertility treatment.
                </p>

                <h2>Why Counselling is Important </h2>
                <p>
                  Facing infertility or undergoing fertility treatments can
                  evoke a range of emotions, including stress, anxiety, grief,
                  and uncertainty. Our counselling services are tailored to
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Start Counsling Section */}
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Our Counseling Services "
          sectionTitleUp=""
          data={departmentData}
        />
      </Section>
      {/* End Counsling Section */}

      {/* Start Why Choose Us Section */}
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
      {/* End Why Choose us Section */}

      {/* Start Success Stories Section */}

      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Success Stories"
          // sectionTitleUp="Success Stories"
          data={blogData}
        />
      </Section>

      {/* End Success Stories Section */}

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

      {/* Start Contact Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={205}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <div className="container cs_mt_minus_110">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      {/* End Contact Section */}
    </>
  );
}

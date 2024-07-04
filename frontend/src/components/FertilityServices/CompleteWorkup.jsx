import React from "react";
import { pageTitle } from "../../helpers/PageTitle";
import BreadcrumbStyle3 from "../Breadcrumb/BreadcrumbStyle3";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Spacing from "../Spacing";
import Sidebar from "../Sidebar/Workup";
import FaqSection from "../Section/FaqSection";
import Post from "../Post";
import styled from "styled-components";
import FeaturesSectionStyle5 from "../Feature/FeaturesSectionStyle5";
const relatedBlog = [
  {
    title:
      "The Importance of Mental Health: Understanding and Managing Anxiety Disorders",
    thumbUrl: "/images/blog/post_1.jpeg",
    date: "March 12",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
  {
    title: `A Parent's Guide to Childhood Vaccinations: What You Need to Know`,
    thumbUrl: "/images/blog/post_2.jpeg",
    date: "March 11",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
  {
    title: "Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle",
    thumbUrl: "/images/blog/post_3.jpeg",
    date: "March 9",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
];
const faqData = [
  {
    title: "What is a complete fertility workup ?",
    content:
      "A complete fertility workup is a comprehensive evaluation of both partners' reproductive health to identify potential causes of infertility. It includes a series of diagnostic tests, physical examinations, and medical history reviews to provide a thorough understanding of factors affecting fertility and to develop an effective treatment plan.",
  },
  {
    title: "What tests are included in a complete fertility workup ?",
    content:
      "A complete fertility workup typically includes, for women : blood tests, ultrasound scans, HSG, and possibly laparoscopy or hysteroscopy, and for men : semen analysis, blood tests, and possibly a physical examination or ultrasound.",
  },
  {
    title: "How long does a complete fertility workup take ?",
    content:
      "The duration of a complete fertility workup can vary depending on the specific tests required and the individual's health condition. Generally, the workup can take several weeks to complete, as some tests are performed at specific times during a woman’s menstrual cycle. Your fertility specialist will provide a detailed timeline based on your personalized evaluation plan.",
  },
  {
    title: "Why is a complete fertility workup important ?",
    content:
      "A complete fertility workup is essential because it helps identify the underlying causes of infertility, allowing for a targeted and effective treatment plan. By understanding the specific factors affecting fertility, our specialists can recommend the most appropriate interventions, increasing the chances of successful conception and a healthy pregnancy.",
  },
  {
    title:
      "What should I expect during my first visit for a complete fertility workup ?",
    content:
      "During your first visit, you’ll receive a comprehensive medical history review, a detailed physical examination, and initial test recommendations to kickstart your fertility evaluation. You’ll also get a clear overview of the entire workup process, including what additional tests might be needed, the timeline for results, and the next steps for your treatment plan.",
  },
];
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

export default function CompleteWorkup() {
  pageTitle("CompleteWorkup");
  return (
    <>
      <Container>
        <div className="container">
          <Section topMd={170} bottomMd={54} bottomLg={54}>
            <BreadcrumbStyle3 title="Important things to know about male and female infertility workups" />
          </Section>
          <div className="container">
            <div className="cs_blog_details_info">
              <div className="cs_blog_details_info_left">
                <div className="cs_blog_details_date">
                  March 12, 2024 | Dr. Archana Srivastava
                </div>
              </div>
              <div className="cs_social_links_wrap">
                <h2>Share:</h2>
                <div className="cs_social_links">
                  <Link to="/">
                    <Icon icon="fa-brands:facebook-f" />
                  </Link>
                  <Link to="/">
                    <Icon icon="fa-brands:linkedin-in" />
                  </Link>
                  <Link to="/">
                    <Icon icon="fa-brands:twitter" />
                  </Link>
                </div>
              </div>
            </div>

            <Spacing md="90" lg="50" />
            <div className="row">
              <div className="col-lg-8">
                <div className="cs_blog_details">
                  <h2>
                    Comprehensive Fertility Assessments at Jabalpur Fertility
                    Centre
                  </h2>
                  <p>
                    Understanding the root cause of fertility issues is the
                    essential first step towards effective treatment. At
                    Jabalpur Fertility Centre, recognized as the Best Fertility
                    Clinic in Jabalpur, we are committed to providing thorough
                    and detailed fertility assessments. Our expert team, led by
                    Dr. Archana Shrivastav, the Best IVF Doctor in Jabalpur,
                    utilizes advanced diagnostic techniques to ensure a precise
                    and comprehensive evaluation of your fertility health.
                  </p>
                  <h2>What is a Complete Fertility Workup?</h2>
                  <p>
                    A complete fertility workup is an extensive series of tests
                    and evaluations designed to identify any factors that may be
                    impacting your ability to conceive. This comprehensive
                    approach ensures that we gather all necessary information to
                    develop a tailored treatment plan that addresses your unique
                    needs and circumstances.
                  </p>

                  <h3>Components of the Fertility Workup</h3>
                  <ol>
                    <h4>1. Detailed Medical History Review</h4>

                    <p>
                      <b>Personal Medical History :</b> We review your past
                      medical records, including any previous pregnancies,
                      surgeries, and treatments.
                    </p>
                    <p>
                      <b>Family Medical History :</b> Understanding the medical
                      history of your family can help identify any genetic
                      factors or hereditary conditions that might affect
                      fertility.
                    </p>
                    <p>
                      <b>Menstrual Cycle Analysis :</b> Detailed tracking of
                      menstrual cycle regularity, duration, and associated
                      symptoms to understand hormonal balance and ovulatory
                      patterns.
                    </p>

                    <h4>2. Thorough Physical Examination</h4>

                    <p>
                      <b>General Health Assessment :</b> A complete physical
                      examination to assess overall health and identify any
                      physical conditions that may affect fertility.
                    </p>
                    <p>
                      <b>Reproductive Health Examination :</b> A focused
                      examination of the reproductive organs to detect any
                      abnormalities or signs of conditions such as
                      endometriosis, fibroids, or polycystic ovary syndrome
                      (PCOS).
                    </p>

                    <h4>3. Comprehensive Hormonal Testing</h4>

                    <p>
                      <b>Blood Tests :</b> Blood samples are taken to measure
                      levels of key hormones including FSH, LH, AMH, estrogen,
                      and progesterone, which play crucial roles in the
                      reproductive process.
                    </p>
                    <p>
                      <b>Thyroid Function Tests :</b> Evaluating thyroid hormone
                      levels, as thyroid dysfunction can significantly impact
                      fertility.
                    </p>

                    <h4>4. Advanced Ultrasound Imaging</h4>

                    <p>
                      <b>Transvaginal Ultrasound : </b>Provides detailed images
                      of the uterus, ovaries, and fallopian tubes to detect
                      structural abnormalities such as cysts, fibroids, or
                      polyps.
                    </p>
                    <p>
                      <b>Antral Follicle Count (AFC) :</b> Assessing the number
                      of follicles in the ovaries to evaluate ovarian reserve
                      and predict response to fertility treatments.
                    </p>

                    <h4>5. Semen Analysis for Male Partners</h4>

                    <p>
                      <b>Sperm Count :</b> Determining the number of sperm
                      present in a semen sample.
                    </p>
                    <p>
                      <b> Sperm Motility :</b> Assessing the movement and
                      swimming capabilities of sperm.
                    </p>
                    <p>
                      <b>Sperm Morphology :</b> Examining the size and shape of
                      sperm to identify any abnormalities that could affect
                      fertility.
                    </p>

                    <h4>6. Additional Diagnostic Procedures</h4>

                    <p>
                      <b>Hysterosalpingography (HSG) :</b> An X-ray procedure to
                      check the patency of the fallopian tubes and detect any
                      blockages or abnormalities in the uterine cavity.
                    </p>
                    <p>
                      <b> Laparoscopy :</b> A minimally invasive surgical
                      procedure to visually examine the pelvic organs and
                      identify conditions like endometriosis or adhesions that
                      might not be detectable through other methods.
                    </p>
                    <p>
                      <b>Hysteroscopy :</b> A procedure using a thin, lighted
                      tube to inspect the inside of the uterus for polyps,
                      fibroids, or other abnormalities.
                    </p>
                  </ol>

                  <h3>Personalized Approach to Treatment</h3>
                  <p>
                    Once the complete fertility workup is completed, our team,
                    led by Dr. Archana Shrivastav, will analyze the results and
                    develop a personalized treatment plan tailored to your
                    specific needs. This plan may include :
                  </p>

                  <li>
                    <b>Lifestyle Modifications : </b>Recommendations on diet, exercise,
                    and stress management <br />
                    <span className="margin"></span>
                    to improve overall health and fertility.{" "}
                  </li>
                  <li>
                    <b>Medications : </b>Prescribing hormonal treatments or other
                    medications to address <br />
                    <span className="margin"></span> specific conditions such as
                    PCOS or thyroid dysfunction.
                  </li>
                  <li>
                    <b>Surgical Interventions : </b>If structural issues are identified,
                    minimally invasive <br />
                    <span className="margin"></span> surgical procedures may be
                    recommended to correct abnormalities.
                  </li>
                  <li>
                    <b>Assisted Reproductive Technologies (ART) : </b>For those
                    requiring advanced
                    <br />
                    <span className="margin"></span> treatments, options such as
                    IVF Treatment in Jabalpur or IUI may be suggested to
                    <br />
                    <span className="margin"></span> enhance the chances of
                    conception.
                  </li>
                  <li>
                    <b>Male Fertility Treatments : </b>For couples where male factor
                    infertility is identified,
                    <br />
                    <span className="margin"></span> treatments such as sperm
                    retrieval techniques, medication, or lifestyle changes may{" "}
                    <br />
                    <span className="margin"></span>be recommended.
                  </li>
                </div>
                <Spacing md="85" />
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
              <div className="col-lg-12"></div>
            </div>
          </div>

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
          <Section>
            <FaqSection
              data={faqData}
              sectionTitle="Frequently Asked <br />Questions"
            />
          </Section>
          <Spacing md="135" lg="100" />
          <h2 className="mb-0 cs_fs_40 cs_medium">Related Articles</h2>
          <Spacing md="57" />
          <div className="row cs_gap_y_40">
            {relatedBlog?.map((item, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <Post {...item} />
              </div>
            ))}
          </div>
          <Spacing md="200" xl="150" lg="110" />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .margin {
    margin-left: 25px;
  }
`;

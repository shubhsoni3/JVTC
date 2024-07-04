import React from "react";
import { pageTitle } from "../../helpers/PageTitle";
import BreadcrumbStyle3 from "../Breadcrumb/BreadcrumbStyle3";
import Section from "../Section";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Spacing from "../Spacing";
import Sidebar from "../Sidebar/Workup";
import Post from "../Post";
import styled from "styled-components";
import WorkingProcess from "../Section/WorkingProcess";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";
const workingProcessData = [
  {
    title: "Preoperative Evaluation",
    subTitle:
      "To plan the surgical approach, a comprehensive assessment of the patient’s medical history, symptoms, and diagnostic imaging, such as ultrasound and MRI, is conducted. This is followed by a discussion of surgical goals, potential risks, benefits, and expected outcomes.",
    iconUrl: "/images/home_2/department_icon3.png",
    number: "01",
  },
  {
    title: "Surgical Procedure",
    subTitle:
      "General anesthesia is administered to ensure comfort and safety during the procedure. Small keyhole incisions are made near the navel and lower abdomen to insert a laparoscope, which is a camera, and surgical instruments. The surgery involves precise visualization of pelvic organs and the surgical removal or treatment of targeted tissues such as fibroids, cysts, or endometriotic lesions. Finally, the incisions are closed with sutures or surgical tape, and a sterile dressing is applied.",
    iconUrl: "/images/home_2/department_ichi2.png",
    number: "02",
  },
  {
    title: "Postoperative Care",
    subTitle:
      "After the procedure, patients typically recover in a designated recovery area under medical supervision until they are fully awake and stable. Medications are provided to manage postoperative discomfort, and patients receive instructions for home care and follow-up appointments.",
    iconUrl: "/images/home_2/department_ichi3.png",
    number: "03",
  },
  
];
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
    title:
      " What conditions can be treated with laparoscopic surgery at Jabalpur Fertility Centre ?",
    content:
      "Laparoscopic surgery at Jabalpur Fertility Centre is used to treat various gynecological conditions that can affect fertility. These conditions include fibroids, which are non-cancerous growths in the uterus that can cause pain, heavy periods, and infertility; ovarian cysts, which are fluid-filled sacs that develop on the ovaries and can interfere with ovulation and fertility; endometriosis, a condition where tissue similar to the lining of the uterus grows outside the uterus, often causing pain and infertility; and pelvic adhesions, which are scar tissue that forms between pelvic organs and can disrupt reproductive function.",
  },
  {
    title:
      "What are the benefits of laparoscopic surgery for these conditions ?",
    content:
      "Laparoscopic surgery offers several advantages over traditional open surgery. It is minimally invasive, with small incisions usually less than an inch, resulting in less pain, scarring, and faster recovery compared to open surgery. Most procedures are performed on an outpatient basis or require a short hospital stay, leading to a shorter hospital stay overall. Additionally, patients can return to normal activities sooner, typically within a few days to weeks depending on the procedure, ensuring a quicker recovery.",
  },
  {
    title: "How is laparoscopic surgery performed for these conditions ?",
    content:
      "Laparoscopic surgery involves several steps. First, general anesthesia is administered to ensure the patient is comfortable and pain-free during the procedure. Then, several small incisions are made near the belly button and lower abdomen. A laparoscope, which is a thin, lighted tube with a camera, and surgical instruments are inserted through these incisions. The surgeon uses the laparoscope to view the pelvic organs and perform the necessary surgical procedures, such as removing fibroids, cysts, or endometriosis tissue. Finally, the incisions are closed with sutures or surgical tape.",
  },
  {
    title:
      "What are the risks and complications associated with laparoscopic surgery ?",
    content:
      "While laparoscopic surgery is generally safe, it carries some risks, like any surgical procedure. These include the risk of infection at the incision sites or within the pelvic cavity, minimal risk of bleeding during or after the procedure, rare risk of accidental damage to surrounding organs such as the bladder or intestines, adverse reactions to anesthesia (though rare), and mild to moderate discomfort or pain after the procedure, which is usually managed with pain medication.",
  },
  {
    title:
      "How should I prepare for laparoscopic surgery at Jabalpur Fertility Centre ?",
    content:
      "Preparation for laparoscopic surgery includes undergoing any required medical tests or evaluations as recommended by your doctor. You should follow preoperative instructions regarding fasting, medication adjustments, and personal hygiene. Additionally, it is important to arrange for transportation to and from the hospital or clinic, as well as assistance during recovery if needed. Be sure to inform your doctor of any allergies, medical conditions, or medications you are currently taking.",
  },
];

export default function CompleteWorkup() {
  pageTitle("CompleteWorkup");
  return (
    <>
      <Container>
        <Section topMd={170} bottomMd={54} bottomLg={54}>
          <BreadcrumbStyle3 title="Key Insights on Fertility Preservation" />
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
                  Advanced Minimally Invasive Surgical Solutions at Jabalpur
                  Fertility Centre
                </h2>
                <p>
                  Laparoscopic surgery, also known as minimally invasive surgery
                  or keyhole surgery, is a highly effective approach for the
                  removal of fibroids, ovarian cysts, endometriosis, and other
                  gynecological conditions. At Jabalpur Fertility Centre,
                  recognized as the Best Fertility Clinic in Jabalpur, we
                  specialize in laparoscopic procedures under the expert
                  guidance of Dr. Archana Shrivastav, the Best IVF Doctor in
                  Jabalpur. Our mission is to provide personalized,
                  compassionate care and deliver optimal surgical outcomes for
                  women’s health issues.
                </p>
                <h2>
                  What Conditions Can be Treated with Laparoscopic Surgery ?
                </h2>
                <p>
                  <b>Fibroids (Myomectomy)</b>
                  <br />
                  <li>
                    <b>Uterine Fibroids : </b>Non-cancerous growths that develop
                    in the uterus and may cause heavy menstrual bleeding, pelvic
                    pain, or fertility issues.
                  </li>
                  <li>
                    <b>Myomectomy : </b>Surgical removal of fibroids while
                    preserving the uterus, which may be recommended for women
                    who wish to retain their fertility.
                  </li>
                </p>

                <p>
                  <b>Endometriosis (Excision)</b>
                  <br />
                  <li>
                    <b>Endometriosis : </b>A condition where tissue similar to
                    the lining of the uterus grows outside the uterus, often
                    causing pain, infertility, or other complications.
                  </li>
                  <li>
                    <b>Excision Surgery : </b>
                    Precise removal of endometriotic lesions and adhesions to
                    relieve symptoms and improve fertility outcomes.
                  </li>
                </p>

                <p>
                  <b>Other Conditions</b>
                  <br />
                  <li>
                    <b>Tubal Reversal Surgery : </b>
                    Reversal of tubal ligation or surgical repair of fallopian
                    tubes to restore fertility.
                  </li>
                  <li>
                    <b>Pelvic Adhesions : </b>
                    Surgical release of scar tissue (adhesions) that may form
                    after previous surgeries or infections, potentially causing
                    pain or infertility.
                  </li>
                </p>
              </div>
              <Spacing md="85" />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
          {/* Start FAQ Section */}
          <Section
            topMd={185}
            topLg={140}
            topXl={100}
            bottomMd={200}
            bottomLg={150}
            bottomXl={110}
          >
            <WorkingProcess
              sectionTitle="The Laparoscopic Surgery Procedure"
              sectionTitleUp=""
              sectionTitleDown=""
              sectionSubTitle=""
              data={workingProcessData}
            />
          </Section>
          {/* End FAQ Section */}

          <Section
            topMd={100}
            topLg={100}
            topXl={110}
            bottomMd={200}
            bottomLg={150}
            bottomXl={20}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cs_blog_details">
                    <h2>Benefits of Laparoscopic Surgery</h2>
                    <p>
                      <li>
                        <b>Minimally Invasive : </b>Small incisions result in
                        less pain, reduced scarring, and faster recovery
                        compared to traditional open surgery.
                      </li>
                      <li>
                        <b>Shorter Hospital Stay : </b> Most procedures are
                        performed on an outpatient basis or require only a short
                        hospital stay.
                      </li>
                      <li>
                        <b>Preservation of Fertility :</b> Surgical techniques
                        are tailored to preserve reproductive organs and
                        function whenever possible.
                      </li>
                      <li>
                        <b>Effective Treatment : </b> Laparoscopic surgery
                        offers precise diagnosis and treatment of gynecological
                        conditions with high success rates.
                      </li>
                    </p>

                    <h2>
                      Why Choose Jabalpur Fertility Centre for Laparoscopic
                      Surgery?
                    </h2>
                    <li>
                      <b>Expertise and Experience : </b>
                      Led by Dr. Archana Shrivastav, our team has extensive
                      experience in performing successful laparoscopic surgeries
                      for gynecological conditions.
                    </li>
                    <li>
                      <b>Advanced Technology : </b>
                      State-of-the-art laparoscopic equipment and facilities
                      ensure optimal surgical outcomes and patient safety.
                    </li>
                    <li>
                      <b>Comprehensive Care : </b>
                      From initial consultation and diagnostic evaluation to
                      surgical treatment and postoperative follow-up, we provide
                      comprehensive care throughout your surgical journey.
                    </li>
                    <li>
                      <b>Patient-Centered Approach : </b>
                      We prioritize your comfort, well-being, and informed
                      decision-making, offering compassionate support at every
                      step.
                    </li>

                    <Section topMd={165} topLg={125} topXl={70}>
                      <FaqSectionStyle4
                        sectionTitle="Frequently Asked Questions"
                        data={faqData}
                        faqImgUrl="/images/home_4/faq_img.jpeg"
                        spiningImgUrl="/images/home_1/about_mini.svg"
                      />
                    </Section>
                    <br />
                    <br />
                    <h1>Contact Us</h1>
                    <p>
                      If you are considering laparoscopic surgery for the
                      removal of fibroids, ovarian cysts, endometriosis, or
                      other gynecological conditions, contact Jabalpur Fertility
                      Centre today. Our dedicated team is here to provide expert
                      care and support to address your health needs effectively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section bottomMd={200}
          bottomLg={150}
          bottomXl={110}>
          <div className="container">
        <h2 className="mb-0 cs_fs_40 cs_medium">Related Articles</h2>
          <Spacing md="57" />
          <div className="row cs_gap_y_40">
            {relatedBlog?.map((item, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <Post {...item} />
              </div>
            ))}
          </div>
          </div>
          </Section>
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

import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import BreadcrumbStyle3 from "../Breadcrumb/BreadcrumbStyle3";
import { Icon } from "@iconify/react";
import Spacing from "../Spacing";
import Post from "../Post";
import Sidebar from "../Sidebar/Laparoscopy";
import { pageTitle } from "../../helpers/PageTitle";
import styled from "styled-components";
// import FaqSection from "../Section/FaqSection";
import WorkingProcess from "../Section/WorkingProcess";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";
const relatedBlog = [
  {
    title:
      "The Importance of Mental Health: Understanding and Managing Anxiety Disorders",
    thumbUrl: "/images/blog/post_1.jpeg",
    date: "March 12",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
  // {
  //   title: `A Parent's Guide to Childhood Vaccinations: What You Need to Know`,
  //   thumbUrl: "/images/blog/post_2.jpeg",
  //   date: "March 11",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  // },
  // {
  //   title: "Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle",
  //   thumbUrl: "/images/blog/post_3.jpeg",
  //   date: "March 9",
  //   btnText: "Learn More",
  //   href: "/blog/blog-details",
  // },
];
const faqData = [
  {
    title: " What are hysteroscopy and laparoscopy, and how are they used in fertility treatments ?",
    content:
      "Hysteroscopy and laparoscopy are minimally invasive surgical procedures used to diagnose and treat conditions affecting fertility. Hysteroscopy involves inserting a thin, lighted tube (hysteroscope) through the cervix to examine the inside of the uterus, diagnosing and treating abnormalities such as polyps, fibroids, and adhesions. Laparoscopy involves inserting a thin, lighted tube (laparoscope) through a small incision in the abdomen to examine the pelvic organs, diagnosing and treating conditions like endometriosis, ovarian cysts, and tubal blockages.",
  },
  {
    title: "What conditions can be diagnosed or treated with hysteroscopy and laparoscopy ?",
    content:
      "Both procedures can address a variety of fertility-related conditions. Hysteroscopy can diagnose and treat uterine polyps, fibroids, uterine adhesions (Asherman’s syndrome), congenital uterine abnormalities, and abnormal uterine bleeding. Laparoscopy can diagnose and treat endometriosis, ovarian cysts, pelvic adhesions, tubal blockages, ectopic pregnancy, and unexplained infertility.",
  },
  {
    title: "What is the recovery time for hysteroscopy and laparoscopy ?",
    content: "Recovery times for both procedures are relatively short but can vary. Hysteroscopy is generally performed as an outpatient procedure, with most patients returning to normal activities within a day or two, though mild cramping and spotting may occur for a few days post-procedure. Laparoscopy is usually performed as an outpatient procedure, sometimes requiring an overnight stay. Most patients can return to light activities within a week, with full recovery typically taking 1-2 weeks depending on the extent of the surgery. Some shoulder pain may occur due to the gas used to inflate the abdomen during the procedure.",
  },
  {
    title: "Are there any risks or complications associated with hysteroscopy and laparoscopy ?",
    content:
      "Both procedures are generally safe but carry some risks. Hysteroscopy risks include infection, uterine perforation (rare), bleeding, and adverse reaction to anesthesia. Laparoscopy risks include infection, bleeding, injury to surrounding organs (bladder, bowel, blood vessels), adverse reaction to anesthesia, and rare blood clots.",
  },
  {
    title: " How should I prepare for hysteroscopy and laparoscopy ?",
    content: "Proper preparation can help ensure a smooth procedure and recovery. For hysteroscopy, follow pre-procedure instructions regarding fasting and medication adjustments, arrange for someone to drive you home after the procedure, and inform your doctor of any allergies or medications you are taking. For laparoscopy, follow pre-procedure instructions regarding fasting and medication adjustments, arrange for someone to drive you home and assist you post-procedure, wear loose, comfortable clothing to the procedure, and inform your doctor of any medical conditions, allergies, or medications you are taking.",
  },
];
const workingProcessData = [
  {
    title: "Diagnostic Hysteroscopy",
    subTitle:
      "Insertion of a hysteroscope through the cervix into the uterus to examine the uterine cavity involves visual inspection of the endometrium and identification of any abnormalities.",
    iconUrl: "/images/home_2/departmentLap.png",
    number: "01",
  },
  {
    title: "Sperm Aspiration",
    subTitle:
      "In cases where abnormalities such as polyps or fibroids are detected, surgical instruments can be passed through the hysteroscope to remove or treat these lesions, offering a minimally invasive approach with a shorter recovery time compared to traditional surgery.",
    iconUrl: "/images/home_2/departmentLap2.png",
    number: "02",
  },
];

const PesaData = [
  {
    title: "Diagnostic Laparoscopy",
    subTitle:
      "Insertion of a laparoscope through a small incision near the navel allows visualization of the pelvic organs, enabling examination of the uterus, fallopian tubes, ovaries, and surrounding structures for abnormalities.",
    iconUrl: "/images/home_2/departmentLap.png",
    number: "01",
  },
  {
    title: "Operative Laparoscopy",
    subTitle:
      "Performance of surgical procedures such as ovarian cystectomy, treatment of endometriosis, or tubal reanastomosis is achieved through additional small incisions, using precise surgical instruments to minimize trauma and scarring.",
    iconUrl: "/images/home_2/department_icon7.png",
    number: "02",
  },
];

export default function BlogDetails() {
  pageTitle("Blog Details");
  return (
    <>
      <Container>
        <Section topMd={170} bottomMd={54} bottomLg={54}>
          <BreadcrumbStyle3 title="Hysteroscopy and Laparoscopy Treatment " />
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
                <Link to="https://m.facebook.com/jabalpurfertilitycentre/">
                  <Icon icon="fa-brands:facebook-f" />
                </Link>
                <Link to="https://www.linkedin.com/in/jabalpur-fertility-centre-97504a227/">
                  <Icon icon="fa-brands:linkedin-in" />
                </Link>
                <Link to="https://x.com/jabalpurivf1">
                  <Icon icon="fa-brands:twitter" />
                </Link>
              </div>
            </div>
          </div>

          <Spacing md="90" lg="50" />
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_blog_details">
                
                <h3>Advanced Diagnostic and Surgical Techniques at Jabalpur Fertility Centre</h3>
                <p>
                Hysteroscopy and laparoscopy are advanced minimally invasive procedures used for both diagnostic evaluation and surgical treatment of various gynecological conditions. At Jabalpur Fertility Centre, recognized as the Best Fertility Clinic in Jabalpur, we offer comprehensive hysteroscopy and laparoscopy services under the expert guidance of Dr. Archana Shrivastav, the Best IVF Doctor in Jabalpur. Our mission is to provide personalized, compassionate care and effective solutions for women’s health issues.
                </p>

                <h2>
                What is Hysteroscopy?
                </h2>
                <p>Hysteroscopy is a procedure that allows a doctor to examine the inside of the uterus (endometrial cavity) using a thin, lighted instrument called a hysteroscope. This procedure can be both diagnostic and therapeutic, enabling visualization and treatment of various uterine conditions.</p>
                <h3>When is Hysteroscopy Recommended?</h3>
                <ol>
                  <p>
                    <b>Abnormal Uterine Bleeding : </b>
                    Evaluation and treatment of abnormal menstrual bleeding.
                  </p>
                  <p>
                    <b>Recurrent Miscarriages : </b>
                    Investigation of uterine abnormalities that may contribute to recurrent miscarriages.
                  </p>
                  <p>
                    <b>Uterine Polyps or Fibroids : </b>
                    Removal of polyps or fibroids that may affect fertility or cause abnormal bleeding.
                  </p>
                  <p>
                    <b>Adhesions (Asherman’s Syndrome) : </b>
                    Diagnosis and treatment of intrauterine adhesions that can result from previous surgeries or infections.
                  </p>
                  <p>
                    <b>Evaluation Prior to IVF : </b>
                    Assessment of the uterine cavity before undergoing IVF treatment.
                  </p>
                </ol>

               {/* Start FAQ Section */} 
                <Section
          topMd={15}
          topLg={10}
          topXl={10}
          bottomMd={100}
          bottomLg={75}
          bottomXl={55}
        >
          <WorkingProcess
            sectionTitle="The Hysteroscopy Procedure"
            sectionTitleUp=""
            sectionTitleDown=""
            sectionSubTitle=""
            data={workingProcessData}
          />
        </Section>
        {/* End FAQ Section */}
        
                <h2>
                What is Laparoscopy ?
                </h2>
                <p>Laparoscopy, also known as minimally invasive surgery or keyhole surgery, involves examining and treating pelvic organs through small incisions using a laparoscope (a thin, lighted instrument with a camera). This technique allows for precise diagnosis and treatment of various gynecological conditions.</p>
                <h3>When is Laparoscopy Recommended ? </h3>
                <ol>
                  <p>
                    <b>Endometriosis : </b>
                    Diagnosis and surgical management of endometriosis, a condition where tissue similar to the lining of the uterus grows outside the uterus.
                  </p>
                  <p>
                    <b>Ovarian Cysts : </b>
                    Removal of benign ovarian cysts that may affect fertility or cause pain.
                  </p>
                  <p>
                    <b>Tubal Reversal Surgery : </b>
                    Reversal of tubal ligation or surgical repair of fallopian tubes.
                  </p>
                  <p>
                    <b>Evaluation of Infertility : </b>
                    Assessment of pelvic anatomy and detection of conditions like adhesions, pelvic inflammatory disease (PID), or ovarian disorders.
                  </p>
                  <p>
                    <b>Hysterectomy : </b>
                    Removal of the uterus (total laparoscopic hysterectomy) or part of the uterus (laparoscopic myomectomy) for certain medical conditions.
                  </p>
                </ol>

         {/* Start FAQ Section */}
        <Section
          topMd={15}
          topLg={10}
          topXl={10}
          // bottomMd={200}
          // bottomLg={150}
          // bottomXl={110}
        >
          <WorkingProcess
            sectionTitle="The Laparoscopy Procedure"
            sectionTitleUp=""
            sectionTitleDown=""
            sectionSubTitle=""
            data={PesaData}
          />
        </Section>

        {/* End FAQ Section */}
              </div>
              <Spacing md="85" />
            </div>
            <div className="col-lg-4">
              <h2 className="d-flex justify-content-center">Hysteroscopy</h2>
              <Sidebar />
            </div>

            <Section
          topMd={100}
          topLg={100}
          topXl={110}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>Benefits of Hysteroscopy and Laparoscopy</h2>
                  <p>
                    <li>
                      <b>Minimally Invasive :</b> Small incisions lead to faster recovery, less pain, and reduced risk of infection compared to traditional open surgery.
                    </li>
                    <li>
                      <b>Precise Diagnosis : </b>Detailed visualization of pelvic structures allows for accurate diagnosis of gynecological conditions.
                    </li>
                    <li>
                      <b>Effective Treatment :</b> Many conditions can be treated during the same procedure, minimizing the need for additional surgeries.
                    </li>
                    <li>
                      <b>Shorter Hospital Stay :</b> Most procedures are performed on an outpatient basis, allowing patients to return home the same day.
                    </li>
                  </p>

                  <h2>Why Choose Jabalpur Fertility Centre for Hysteroscopy and Laparoscopy ?</h2>
                  
                  <li>
                    <b>Expertise and Experience : </b>
                    Led by Dr. Archana Shrivastav, our team has extensive experience in performing successful hysteroscopy and laparoscopy procedures.
                  </li>
                  <li>
                    <b>State-of-the-Art Facility : </b>
                    F Equipped with advanced technology and facilities to ensure the highest standards of care and safety.
                  </li>
                  <li>
                    <b>Comprehensive Gynecological Services : </b>
                    From initial consultation and diagnostic evaluation to minimally invasive surgery and post-operative care, we offer complete gynecological care.
                  </li>
                  <li>
                    <b>Patient-Centered Approach : </b>
                    We prioritize your comfort and well-being, offering
                    compassionate support throughout your fertility journey.
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
                  If you require hysteroscopy or laparoscopy for diagnostic evaluation or treatment of gynecological conditions, contact Jabalpur Fertility Centre today. Our dedicated team is here to provide expert care and support to address your health needs effectively.
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
              <div className="col-xl-12" key={index}>
                <Post {...item} />
              </div>
            ))}
          </div>
          </div>
          </Section>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div``;

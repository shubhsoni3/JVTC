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
import FaqSection from "../Section/FaqSection";
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
    title: "Why does a woman need a laparoscopy?",
    content:
      "They need it to identify the stage of diseases like cancer in any abdominal organ or for an injury like free air in the diaphragm.",
  },
  {
    title: "What is the success ratio for laparoscopy surgery?",
    content:
      "If performed by experienced endoscopists and laparoscopy surgeons, then it has a success ratio of 94%.",
  },
  {
    title: "For how long does laparoscopy pain last?",
    content: "It usually lasts around 1-2 days in your belly & shoulders.",
  },
  {
    title: "Can we bathe after the surgery?",
    content:
      "Yes, you can usually bathe after undergoing laparoscopic surgery.",
  },
  {
    title: "Can we drive immediately after the surgery?",
    content: "It’s recommended not to drive for atleast 48 hours post-surgery.",
  },
];

export default function BlogDetails() {
  pageTitle("Blog Details");
  return (
    <>
      <Container>
        <Section topMd={170} bottomMd={54} bottomLg={54}>
          <BreadcrumbStyle3 title="Laparoscopy Treatment " />
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
                <h2>What is Laparoscopy Treatment </h2>
                <p>
                  Laparoscopy is a crucial procedure for evaluating women
                  suffering from infertility. During laparoscopy, small tubes
                  are inserted into the abdomen, allowing direct visualization
                  of the uterus, ovaries, and surrounding structures. This
                  technique can diagnose and treat many causes of infertility,
                  including fibroids, ovarian cysts, endometriosis, and tubal
                  blockages. <br />
                  <br />
                  However, it's essential to recognize that these types of
                  surgeries require extensive skill and expertise. A single
                  error can lead to severe complications. <br />
                  <br />
                  At Jabalpur Fertility, you are in safe hands. Our highly
                  trained surgeons have the expertise to provide you with the
                  best possible treatment. When it comes to laparoscopic
                  surgery, we are the experts in the field. And the results?
                  They speak for themselves!
                </p>

                <h2>
                  Here are six exciting laparoscopic procedures you should know
                  about:
                </h2>
                <ol>
                  <p>
                    <b>1. Laparoscopic Colectomy </b>
                    <br />
                    <p>
                      In this procedure, a part of the large intestine (colon)
                      is removed surgically to treat numerous colorectal
                      diseases like:
                      <li>Colon cancer.</li>
                      <li>Diverticulitis</li>
                      <li>Chronic ulcerative colitis</li>
                      <li>And Crohn’s Disease.</li>
                    </p>
                  </p>
                  <p>
                    <b>2. Laparoscopic Cholecystectomy</b> <br />
                    It’s a surgery performed to remove the gallbladder.
                  </p>
                  <p>
                    <b>3. Laparoscopic Appendectomy</b> <br />
                    Instead of making one large incision, the doctors make
                    several small ones to remove the appendix.
                  </p>
                  <p>
                    <b>4. Laparoscopic Hernia Repair</b> <br />
                    With general anaesthesia’s help and three half-inch
                    incisions, the doctor removes the hernia sac from the
                    abdominal wall and covers it with prosthetic mesh.
                  </p>
                  <p>
                    <b>5. Laparoscopic Splenectomy</b> <br />
                    This surgery is performed to remove the spleen.
                  </p>
                  <p>
                    <b>6. Laparoscopic Adhesiolysis</b> <br />
                    In this surgery, the adhesions are removed either by:
                    <li>Cutting them (off by scalpel) or </li>
                    <li>By releasing them to free the joined organs.</li>
                  </p>
                </ol>
                <h2>Cost of Laparoscopy Surgery:</h2>
                <p>
                  A Hysteroscopy costs about 30,000 INR to 40,000 INR and may
                  vary based on the patient’s condition, the abnormality
                  diagnosed, and the treatment required.
                </p>
                <h2>Treatment/Testing Of Hysteroscopy:</h2>
                <p>
                  <b>
                    The cost of laparoscopic surgery and its types is around:
                  </b>
                  <li>
                    {" "}
                    <b>Rs. 50,000 – Rs. 4,90,000</b> for laparoscopic surgery.
                  </li>
                  <li>
                    Cholecystectomy surgery costs between
                    <b> Rs. 90,000 – Rs. 2,60,000.</b>
                  </li>
                  <li>
                    Hernia repair costs between{" "}
                    <b> Rs. 70,000 – Rs. 1,10,000. </b>
                  </li>
                  <li>
                    The cost of appendectomy surgery lies between{" "}
                    <b> Rs. 40, 000 – Rs. 70,000.</b>
                  </li>
                  <li>
                    The average expense of laparoscopic splenectomy lies between{" "}
                    <b> Rs. 42,000 – Rs. 1,30,000.</b>
                  </li>
                  <li>
                    The average cost of a hysterectomy surgery lies between{" "}
                    <b> Rs. 55,000 – Rs. 75,000.</b>
                  </li>
                  <li>
                    Lastly, the cost of this myomectomy procedure ranges between{" "}
                    <b> Rs. 65,000 to Rs. 1,00,000.</b>
                  </li>
                </p>
                <p>
                  Besides these numerals, there are other aspects as well that
                  also influence the surgery’s price :
                  <li>Doctor’s and admission fee.</li>
                  <li>Patient’s age.</li>
                  <li>The medical condition of the patient</li>
                  <li>Post-surgical complications, if any.</li>
                  <li>Admission room you prefer</li>
                  <li>
                    And lab or examination tests like blood tests, X-rays,
                    ultrasound, MRI scans, ECG, etc.
                  </li>
                </p>

                <h2>Treatment/Testing of Laparoscopy</h2>
                <p>
                  Before diagnosing laparoscopic surgery, there are some tests
                  that your gynaecologists may ask you to perform to know your
                  medical status:
                  <li>Pathology reports.</li>
                  <li>Lab test reports.</li>
                  <li>Earlier X-rays if done from other facilities.</li>
                  <li>Samples of tissues.</li>
                  <li>Operative report.</li>
                  <li>CT scan.</li>
                  <li>Ultrasound.</li>
                  <li>And MRI.</li>
                </p>
                <p>
                  Once the reports are in hand, here’s what happens during the
                  treatment-
                  <li>
                    When you’re on the operating bed, your anaesthetist inserts
                    a cannula that puts you to sleep, relaxes your muscles, and
                    keeps you away from the pain.
                  </li>
                </p>
                <p>
                  After that, your OBGYN makes 2-3 minor cuts around 1-1.3
                  inches:
                  <li>Near your belly button.</li>
                  <li>And the other on both sides of your abdomen.</li>
                </p>
                <p>
                  Once this is done, the OBGYN fills your stomach with carbon
                  dioxide, which makes it easy for them to see your organs.
                  <li>
                    After that, ports are placed on one of the cuts, making it
                    easy for the laparoscope to pass inside.
                  </li>
                  <li>
                    If needed, various other surgical instruments are also used
                    during the surgery.
                  </li>
                  <li>
                    With the help of the television screen, your OBGYN can
                    quickly determine the extent of the problem (fibroids,
                    diseased organ, hernia, ovarian cysts, endometriosis, tubal
                    blockage, etc.) and execute that particular surgery.
                  </li>
                  <li>
                    Once the treatment is done, the laparoscope tube, along with
                    all the surgical instruments and gas, are removed.
                  </li>
                  <li>
                    Then, all the tiny incisions (holes) are closed with
                    stitches and bandages.
                  </li>
                </p>
                <p>
                  <b>
                    Note: The procedure is done under anesthesia and so is
                    completely painless for the patient. It usually requires one
                    more day admission and the patient can get back their usual
                    work within 2 to 3 days of the surgery.
                  </b>
                </p>
                <h2>
                  Why Is Jabalpur Fertility Center For Laparoscopy In Jabalpur
                  The Best?
                </h2>
                <p>
                  Besides treating other ailments,{" "}
                  <b>
                    {" "}
                    women who are undergoing IVF also require laparoscopy to
                    increase the success rate of the IVF procedure. Your
                    fertility specialist will discuss this with you. In case you
                    need a laparoscopy. The best IVF centres have their IVF unit
                    and laparoscopy unit in the same place to give comprehensive
                    treatment to the patient. And Jabalpur Fertility Center has
                    an advanced and equipped IVF Lab and Laparoscopy Unit inside
                    the Fertility Clinic.
                  </b>
                </p>
              </div>
              <Spacing md="85" />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
            <div className="col-lg-12">
              <Section>
                <FaqSection
                  data={faqData}
                  sectionTitle="Frequently Asked <br />Questions"
                />
              </Section>
            </div>
          </div>
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
        </div>
        <Spacing md="200" xl="150" lg="110" />
      </Container>
    </>
  );
}

const Container = styled.div``;

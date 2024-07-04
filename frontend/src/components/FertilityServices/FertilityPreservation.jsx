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
    title: "Initial Consultation and Assessment",
    subTitle:
      "You can book an appointment with us by <br />calling our office, filling out an online form.",
    iconUrl: "/images/home_2/department_icon3.png",
    number: "01",
  },
  {
    title: "Ovarian Stimulation (For Egg or Embryo Freezing)",
    subTitle:
      "For the IVF process, baseline bloodwork and an ultrasound are essential. These tests provide crucial information about your reproductive health, helping <br /> us tailor the most effective treatment plan for you.",
    iconUrl: "/images/home_2/department_ichi2.png",
    number: "02",
  },
  {
    title: "Egg Retrieval (For Egg Freezing)",
    subTitle:
      "Ovarian stimulation is a crucial part of the IVF process. It involves using medications to stimulate your ovaries, encouraging the development of multiple eggs for retrieval and fertilization..",
    iconUrl: "/images/home_2/department_ichi3.png",
    number: "03",
  },
  {
    title: "Sperm Collection (For Sperm Freezing)",
    subTitle:
      "Oocyte maturation involves hormone treatments <br /> to ensure eggs reach full maturity, making <br />them ready for retrieval, fertilization, and<br /> subsequent  embryo development, which<br /> are crucial steps in the IVF process.",
    iconUrl: "/images/home_2/department_ichi4.png",
    number: "04",
  },
  {
    title: "Embryo Freezing (For Embryo Freezing)",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_icon7.png",
    number: "05",
  },
  {
    title: "Storage and Maintenance",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_ichi7.png",
    number: "06",
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
    title: "What is fertility preservation and who should consider it ?",
    content:
      "Fertility preservation involves storing eggs, sperm, or embryos for future use. It is a valuable option for individuals in various situations, such as cancer patients who need to undergo chemotherapy, radiation, or surgery that could affect their fertility. Women at risk of ovarian failure due to medical conditions or a family history of early menopause might also consider fertility preservation. Individuals with genetic conditions that could impact future fertility, those undergoing gender transition who wish to preserve fertility before hormone therapy or surgery, and people delaying parenthood for personal or professional reasons can all benefit from fertility preservation.",
  },
  {
    title:
      "What are the different methods of fertility preservation available ?",
    content:
      "There are several methods for fertility preservation depending on individual needs. Egg freezing, or oocyte cryopreservation, involves the retrieval and freezing of a woman’s eggs for future use. Sperm freezing, or sperm cryopreservation, involves the collection and freezing of sperm. Embryo freezing, or embryo cryopreservation, involves fertilizing eggs with sperm and then freezing the resulting embryos. Ovarian tissue freezing, which is still considered experimental, involves removing and freezing ovarian tissue for future re-implantation. Testicular tissue freezing, also experimental, involves freezing testicular tissue that contains sperm.",
  },
  {
    title: "What is the process of egg freezing and sperm freezing ?",
    content:
      "The processes for egg and sperm freezing involve several steps. For egg freezing, ovarian stimulation is achieved using hormonal medications to produce multiple eggs. A minor surgical procedure is then performed to retrieve the mature eggs from the ovaries, which are then frozen using a process called vitrification. For sperm freezing, the sperm is collected through masturbation or surgical retrieval, analyzed and prepared for freezing, and then frozen using a cryoprotectant and stored in liquid nitrogen.",
  },
  {
    title:
      "How long can eggs, sperm, and embryos be stored, and what are the success rates after thawing ?",
    content:
      "Eggs, sperm, and embryos can be stored for many years without significant deterioration in quality. Typically, they can be stored for up to 10 years or longer, depending on local regulations and individual circumstances. The success rate for achieving pregnancy after thawing frozen eggs ranges from 30-50% per cycle, depending on the woman’s age at the time of freezing. Sperm freezing generally has high success rates, especially when used in assisted reproductive techniques like IVF or ICSI. Success rates for achieving pregnancy with frozen embryos are similar to those with fresh embryos, typically ranging from 40-60% per cycle.",
  },
  {
    title:
      "Are there any risks or side effects associated with fertility preservation ?",
    content:
      "Fertility preservation is generally safe, but there are potential risks and side effects associated with the different methods. For egg freezing, risks include ovarian hyperstimulation syndrome (OHSS), where the ovaries become swollen and painful after stimulation, and minor risks associated with the egg retrieval procedure. The emotional impact of undergoing fertility preservation should also be considered, and counseling is recommended if needed. Sperm freezing carries minimal risks as sperm collection is non-invasive. For embryo freezing, the risks are similar to those associated with egg freezing due to the same ovarian stimulation and egg retrieval process. Ovarian and testicular tissue freezing are experimental procedures with surgical risks and uncertainties regarding future use and success.",
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
                  Preserve Your Fertility Options at Jabalpur Fertility Centre
                </h2>
                <p>
                  Fertility preservation involves techniques that allow
                  individuals to retain their reproductive potential for future
                  use. At Jabalpur Fertility Centre, recognized as the Best
                  Fertility Clinic in Jabalpur, we offer comprehensive fertility
                  preservation services under the expert guidance of Dr. Archana
                  Shrivastav, the Best IVF Doctor in Jabalpur. Our mission is to
                  provide personalized, compassionate care and empower
                  individuals facing medical treatments or life circumstances
                  that may impact their fertility.
                </p>
                <h2>Why Consider Fertility Preservation ?</h2>
                <p>
                  Fertility preservation may be considered in the following
                  situations :
                  <li>
                    <b>Medical Treatments : </b>Individuals undergoing
                    treatments such as chemotherapy or radiation therapy that
                    may affect fertility.
                  </li>
                  <li>
                    <b>Elective Reasons : </b>Those choosing to delay
                    childbearing due to personal or professional reasons.
                  </li>
                  <li>
                    <b>Genetic Risks : </b> Individuals with genetic conditions
                    that may impact fertility later in life.
                  </li>
                  <li>
                    <b>Gender Transition : </b>Transgender individuals
                    undergoing hormone therapy that may affect fertility.
                  </li>
                  <li>
                    <b>Military Deployment : </b>Military personnel facing
                    deployment or other circumstances that may impact fertility.
                  </li>
                </p>
                <h3>Fertility Preservation Options</h3>
                <h4>For Women</h4>
                <p>
                  <b>Egg Freezing (Oocyte Cryopreservation)</b>
                  <br />
                  <br />
                  <li>
                    Involves retrieving eggs from the ovaries, freezing them,
                    and storing them for future use.
                  </li>
                  <li>
                    Recommended for women who wish to preserve their fertility
                    due to medical treatments,
                    <br />
                    <span className="margin"></span> age-related fertility
                    decline, or personal choice.
                  </li>
                </p>
                <p>
                  <b>Embryo Freezing (Embryo Cryopreservation)</b>
                  <br />
                  <br />
                  <li>
                    After eggs are retrieved and fertilized with sperm through
                    IVF, resulting embryos can be frozen and stored for future
                    use.
                  </li>
                  <li>
                    Suitable for couples undergoing IVF who wish to preserve
                    embryos for future pregnancies.
                  </li>
                </p>
                <p>
                  <b>Ovarian Tissue Freezing</b>
                  <br />
                  <br />
                  <li>
                    Involves removing and freezing ovarian tissue containing
                    immature eggs, which can be later transplanted back or
                    matured in the laboratory.
                  </li>
                  <li>
                    Considered for prepubescent girls or women who cannot
                    undergo ovarian stimulation.
                  </li>
                </p>

                <h4>For Men</h4>
                <p>
                  <b>Sperm Freezing (Sperm Cryopreservation)</b>
                  <br />
                  <br />
                  <li>
                    Collection and freezing of sperm samples for later use in
                    assisted reproductive techniques such as IVF or ICSI.
                  </li>
                  <li>
                    Recommended for men facing medical treatments or other
                    circumstances that may impact sperm quality or production.
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
              sectionTitle="The Fertility Preservation Process"
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
                    <h2>Benefits of Fertility Preservation</h2>
                    <p>
                      <li>
                        <b>Preserve Reproductive Options :</b> Allows
                        individuals to delay parenthood while maintaining the
                        possibility of biological children in
                        <br />
                        <span className="margin"></span> the future.
                      </li>
                      <li>
                        <b>Peace of Mind : </b>Provides reassurance for those
                        facing medical treatments or life circumstances that may
                        impact fertility.
                      </li>
                      <li>
                        <b>Advanced Technology :</b> Utilizes state-of-the-art
                        techniques to safely freeze and store reproductive
                        cells.
                      </li>
                    </p>

                    <h2>
                      Why Choose Jabalpur Fertility Centre for Fertility
                      Preservation ?
                    </h2>
                    <li>
                      <b>Expertise and Experience : </b>
                      Led by Dr. Archana Shrivastav, our team has extensive
                      experience in fertility preservation techniques.
                    </li>
                    <li>
                      <b>Personalized Care : </b>
                      We understand the sensitive nature of fertility
                      preservation and tailor our services to meet your unique
                      needs.
                    </li>
                    <li>
                      <b>Comprehensive Fertility Services : </b>
                      From initial consultation and fertility assessment to
                      advanced procedures and long-term storage, <br />
                      <span className="margin"></span>we offer complete
                      fertility preservation solutions.
                    </li>
                    <li>
                      <b>State-of-the-Art Facility : </b>
                      Equipped with the latest technology and facilities to
                      ensure the highest standards of care and storage.
                    </li>
                    <li>
                      <b>Supportive Environment : </b>
                      We provide compassionate support throughout your fertility
                      preservation journey, prioritizing your comfort
                      <br />
                      <span className="margin"></span> and well-being.
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
                      If you are considering fertility preservation, contact
                      Jabalpur Fertility Centre today. Our dedicated team is
                      here to provide guidance, support, and expertise to help
                      you preserve your fertility and achieve your future family
                      goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

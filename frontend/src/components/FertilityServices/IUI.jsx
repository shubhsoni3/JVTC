import React from "react";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import WorkingProcess from "../Section/WorkingProcess";
import { FaUserMd } from "react-icons/fa";
import styled from "styled-components";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";
const workingProcessData = [
  {
    title: "Egg Making",
    subTitle:
      "You can book an appointment with us by <br />calling our office, filling out an online form.",
    iconUrl: "/images/home_2/department_IUI1.png",
    number: "01",
  },
  {
    title: "Egg Tracking ",
    subTitle:
      "For the IVF process, baseline bloodwork and an ultrasound are essential. These tests provide crucial information about your reproductive health, helping <br /> us tailor the most effective treatment plan for you.",
    iconUrl: "/images/home_2/department_IUI2.png",
    number: "02",
  },
  {
    title: "Sperm Rinsing",
    subTitle:
      "Ovarian stimulation is a crucial part of the IVF process. It involves using medications to stimulate your ovaries, encouraging the development of multiple eggs for retrieval and fertilization..",
    iconUrl: "/images/home_2/department_icon6.png",
    number: "03",
  },
  {
    title: "Insemination",
    subTitle:
      "Oocyte maturation involves hormone treatments <br /> to ensure eggs reach full maturity, making <br />them ready for retrieval, fertilization, and<br /> subsequent  embryo development, which<br /> are crucial steps in the IVF process.",
    iconUrl: "/images/home_2/department_icon3.png",
    number: "04",
  },
  {
    title: "Pregnancy Test",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_icon9.png",
    number: "05",
  },
];
const faqData = [
  {
    title: "What is IUI (Intra Uterine Insemination) ?",
    content:
      "IUI, or Intra Uterine Insemination, is a fertility treatment that involves placing washed and concentrated sperm directly into a woman's uterus around the time of ovulation. This procedure increases the number of sperm that reach the fallopian tubes, thereby enhancing the chances of fertilization.",
  },
  {
    title: "Who is a good candidate for IUI?",
    content:
      "IUI is often recommended for couples experiencing unexplained infertility, mild male factor infertility such as low sperm count or decreased sperm motility, cervical mucus problems that can hinder sperm from entering the uterus, mild endometriosis, women with ovulation problems who can ovulate with medication, and same-sex couples or single women using donor sperm.",
  },
  {
    title: "How is the IUI procedure performed ?",
    content:
      "The IUI procedure involves several steps: Ovulation Monitoring, which includes tracking the woman's ovulation cycle through ultrasound and hormone testing; Sperm Preparation, which involves collecting and washing the sperm sample to concentrate the healthiest sperm; and Insemination, where a thin catheter is used to insert the prepared sperm directly into the uterus. This is usually a quick and painless procedure. Post-procedure, the woman may rest for a short period before resuming normal activities. A pregnancy test is typically performed two weeks later to determine the outcome.",
  },
  {
    title: "What are the success rates of IUI?",
    content:
      "The success rates of IUI can vary depending on several factors, including the age of the woman, the underlying cause of infertility, and whether fertility medications are used. On average, IUI success rates range from 10% to 20% per cycle. Multiple cycles may be recommended to increase the chances of success.",
  },
  {
    title: "Are there any risks or side effects associated with IUI ?",
    content:
      "IUI is generally considered a safe procedure with minimal risks. However, some potential risks and side effects include mild discomfort, slight cramping or spotting after the procedure, a higher chance of multiple pregnancies (twins, triplets, etc.) if fertility medications are used, a small risk of infection following the procedure, and Ovarian Hyperstimulation Syndrome (OHSS) if ovulation-inducing drugs are used, which can cause swollen and painful ovaries.",
  },
];
export default function IUI() {
  pageTitle("IVF");
  return (
    <>
      <Container>
        <BannerSectionStyle3
          bgUrl="/images/about/AboutBanner_bg.png"
          // imgUrl="/images/about/banner_img.png"
          title="Welcome to Jabalpur<br /> Fertility Center"
          subTitle="IUI (Intra Uterine Insemination)"
        />

        <Section topMd={200} topLg={150} topXl={110}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>Advanced IUI Treatments at Jabalpur Fertility Centre</h2>
                  <p>
                    Intra Uterine Insemination (IUI) is a widely used and
                    effective fertility treatment that can help many couples
                    achieve their dream of parenthood. At Jabalpur Fertility
                    Centre, the Best Fertility Clinic in Jabalpur, we offer
                    state-of-the-art IUI treatments under the expert care of Dr.
                    Archana Shrivastav, the Best IVF Doctor in Jabalpur. Our
                    goal is to provide you with personalized, compassionate care
                    and the best chances of success.
                  </p>

                  <h1>What is IUI?</h1>
                  <p>
                    Intra Uterine Insemination (IUI) is a fertility treatment
                    that involves placing specially prepared sperm directly into
                    a woman's uterus during her ovulation period. This procedure
                    increases the number of sperm that reach the fallopian
                    tubes, thereby enhancing the chances of fertilization. IUI
                    is a less invasive and less expensive option compared to
                    other assisted reproductive technologies, making it a
                    popular choice for many couples.
                  </p>
                  <h2>When is IUI Recommended?</h2>
                  <p>
                    IUI may be recommended for couples facing the following
                    fertility issues : <br />
                    <br />
                    <li>
                      <b>Unexplained Infertility : </b>When no specific cause of
                      infertility is identified after a complete fertility
                      workup.
                    </li>
                    <li>
                      <b>Mild Male Factor Infertility :</b> Including issues
                      such as low sperm count, poor motility, or abnormal sperm
                      morphology.
                    </li>
                    <li>
                      <b>Cervical Factor Infertility :</b> When cervical mucus
                      is hostile to sperm, preventing it from entering the
                      uterus
                    </li>
                    <li>
                      <b>Ovulation Disorders :</b> Including irregular or absent
                      ovulation.
                    </li>
                    <li>
                      <b>Endometriosis : </b>Mild to moderate cases where other
                      treatments have not been successful.
                    </li>
                    {/* <li>
                      <b>Donor Sperm : </b>For single women or same-sex couples
                      using donor sperm.
                    </li> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Start FAQ Section */}
        <Section
          topMd={185}
          topLg={140}
          topXl={100}
          bottomMd={20}
          bottomLg={15}
          bottomXl={11}
        >
          <WorkingProcess
            sectionTitle="How IUI Works"
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
          bottomXl={110}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>Success Rates and Factors Affecting IUI</h2>
                  <p>
                    Success rates for IUI can vary based on several factors,
                    including :
                    <li>
                      <b>Age of the Woman :</b> Younger women generally have
                      higher success rates.
                    </li>
                    <li>
                      <b>Cause of Infertility : </b>Couples with unexplained
                      infertility or mild male factor infertility tend to have
                      better outcomes.
                    </li>
                    <li>
                      <b>Number of IUI Cycles :</b> Success rates often increase
                      with multiple cycles.
                    </li>
                    <li>
                      <b>Use of Fertility Medications :</b> Medications to
                      induce ovulation can enhance success rates.
                    </li>
                  </p>

                  <h2>Why Choose Jabalpur Fertility Centre for IUI?</h2>
                  <li>
                    <b>Expertise and Experience : </b>
                    Led by Dr. Archana Shrivastav, our team has extensive
                    experience in performing successful IUI procedures.
                  </li>
                  <li>
                    <b>Personalized Care : </b>
                    We tailor our treatment plans to meet the unique needs of
                    each couple, ensuring the best possible outcomes.
                  </li>
                  <li>
                    <b>Comprehensive Fertility Services : </b>
                    From initial consultation and complete fertility workup to
                    advanced treatments like IVF and IUI, we offer <br />
                    <span className="margin"></span> a full spectrum of
                    fertility services.
                  </li>
                  <li>
                    <b>State-of-the-Art Facility : </b>
                    Our clinic is equipped with the latest technology and
                    facilities to provide top-notch fertility care.
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
                    If you are considering IUI as a fertility treatment option,
                    contact Jabalpur Fertility Centre today. Our expert team is
                    here to guide you through the process and help you achieve
                    your dream of starting a family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  .margin {
    margin-left: 25px;
  }
`;

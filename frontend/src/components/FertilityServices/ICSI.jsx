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
    title: "Ovarian Stimulation",
    subTitle:
      "You can book an appointment with us by <br />calling our office, filling out an online form.",
    iconUrl: "/images/home_2/department_icon3.png",
    number: "01",
  },
  {
    title: "Egg Retrieval",
    subTitle:
      "For the IVF process, baseline bloodwork and an ultrasound are essential. These tests provide crucial information about your reproductive health, helping <br /> us tailor the most effective treatment plan for you.",
    iconUrl: "/images/home_2/department_ichi2.png",
    number: "02",
  },
  {
    title: "Sperm Preparation",
    subTitle:
      "Ovarian stimulation is a crucial part of the IVF process. It involves using medications to stimulate your ovaries, encouraging the development of multiple eggs for retrieval and fertilization..",
    iconUrl: "/images/home_2/department_ichi3.png",
    number: "03",
  },
  {
    title: "Fertilization",
    subTitle:
      "Oocyte maturation involves hormone treatments <br /> to ensure eggs reach full maturity, making <br />them ready for retrieval, fertilization, and<br /> subsequent  embryo development, which<br /> are crucial steps in the IVF process.",
    iconUrl: "/images/home_2/department_ichi4.png",
    number: "04",
  },
  {
    title: "Embryo Transfer",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_icon7.png",
    number: "05",
  },
  {
    title: "Cryopreservation of the left embryos",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_ichi7.png",
    number: "06",
  },
];
const faqData = [
  {
    title: "What is ICSI and how does it differ from traditional IVF ?",
    content:
      "ICSI, or Intracytoplasmic Sperm Injection, is a specialized form of IVF where a single sperm is directly injected into an egg to facilitate fertilization. Unlike traditional IVF, where eggs and sperm are combined in a petri dish and fertilization occurs naturally, ICSI is used to overcome severe male infertility issues by manually assisting the fertilization process.",
  },
  {
    title: "Who can benefit from ICSI treatment ?",
    content:
      "ICSI is particularly beneficial for couples facing severe male factor infertility, such as low sperm count, poor sperm motility, or abnormal sperm morphology. It is also useful for those with previous failed IVF cycles with poor fertilization rates, obstructive azoospermia (blocked sperm ducts) where sperm must be retrieved directly from the testes, unexplained infertility where traditional IVF has not been successful, and cases where eggs need to be fertilized with frozen or surgically retrieved sperm.",
  },
  {
    title: "What is the success rate of ICSI compared to conventional IVF ?",
    content:
      "ICSI typically results in high fertilization rates, with about 70-80% of injected eggs becoming fertilized. However, the overall success rates in terms of pregnancy and live birth are similar to those of conventional IVF, depending on various factors including the woman’s age, the quality of the eggs and sperm, and the overall health of the embryos.",
  },
  {
    title: "What are the steps involved in the ICSI procedure ?",
    content:
      "The ICSI procedure involves several steps: Ovarian Stimulation, where hormonal medications stimulate the ovaries to produce multiple eggs; Egg Retrieval, a minor surgical procedure to collect mature eggs from the ovaries; Sperm Collection and Preparation, where sperm is collected and prepared for injection; the ICSI Procedure, where a single sperm is injected directly into each mature egg using a fine needle under a microscope; Embryo Culture, where the fertilized eggs (embryos) are cultured in the lab for several days; Embryo Transfer, where one or more healthy embryos are transferred into the uterus; and a Pregnancy Test, a blood test performed approximately two weeks after the embryo transfer to confirm pregnancy.",
  },
  {
    title: "Are there any risks or side effects associated with ICSI ?",
    content:
      "ICSI is a safe and effective procedure, but there are potential risks and side effects, including Ovarian Hyperstimulation Syndrome (OHSS), a condition where the ovaries become swollen and painful after stimulation; multiple pregnancies, with a higher risk of twins or triplets if multiple embryos are transferred; egg damage, which is rare but can occur during the injection process; genetic concerns, with a slightly increased risk of genetic or chromosomal abnormalities although this risk is low; emotional stress, as the process can be emotionally challenging and counseling is recommended to help manage stress and anxiety; and side effects from medications, such as mild side effects like bloating, mood swings, and headaches from fertility medications.",
  },
];
export default function IVF() {
  pageTitle("IVF");
  return (
    <>
      <Container>
        <BannerSectionStyle3
          bgUrl="/images/about/AboutBanner_bg.png"
          // imgUrl="/images/about/banner_img.png"
          title="Welcome to Jabalpur<br /> Fertility Center"
          subTitle="ICSI (Intracytoplasmic Sperm Injection)"
        />

        <Section topMd={200} topLg={150} topXl={110}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>Advanced ICSI Treatments at Jabalpur Fertility Centre</h2>
                  <p>
                    Intracytoplasmic Sperm Injection (ICSI) is a specialized
                    form of in vitro fertilization (IVF) designed to address
                    severe male factor infertility. At Jabalpur Fertility
                    Centre, recognized as the Best Fertility Clinic in Jabalpur,
                    we offer cutting-edge ICSI treatments under the expert
                    guidance of Dr. Archana Shrivastav, the Best IVF Doctor in
                    Jabalpur. Our mission is to provide personalized,
                    compassionate care and the best possible outcomes for
                    couples facing fertility challenges.
                  </p>

                  <h1>What is ICSI ?</h1>
                  <p>
                    ICSI is a highly precise laboratory procedure where a single
                    sperm is directly injected into an egg to achieve
                    fertilization. This technique bypasses many of the barriers
                    to fertilization encountered in traditional IVF and is
                    particularly beneficial for couples with significant male
                    infertility issues.
                  </p>
                  <h2>When is ICSI Recommended ?</h2>
                  <p>
                    ICSI is often recommended in the following situations :{" "}
                    <br />
                    <br />
                    <li>
                      <b>Severe Male Factor Infertility : </b>Including very low
                      sperm count, poor motility, or abnormal sperm morphology.
                    </li>
                    <li>
                      <b>Previous Failed Fertilization : </b>When fertilization
                      has not occurred in previous IVF attempts.
                    </li>
                    <li>
                      <b> Use of Frozen Sperm : </b>Sperm retrieved from
                      testicular or epididymal aspiration.
                    </li>
                    <li>
                      <b>Egg Preservation : </b>Using previously frozen eggs for
                      fertilization.
                    </li>
                    <li>
                      <b>Unexplained Infertility : </b>When no specific cause of
                      infertility is identified after a complete fertility
                      workup.
                    </li>
                    <li>
                      <b>Genetic Testing : </b>To assist in preimplantation
                      genetic testing (PGT) for genetic disorders.
                    </li>
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
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <WorkingProcess
            sectionTitle="How ICSI Works"
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
                  <h2>Success Rates and Factors Affecting ICSI</h2>
                  <p>
                    Success rates for ICSI can vary based on several factors,
                    including :
                    <li>
                      <b>Age of the Woman :</b> Younger women generally have
                      higher success rates.
                    </li>
                    <li>
                      <b>Quality of Eggs and Sperm : </b>Healthy eggs and sperm
                      increase the likelihood of successful fertilization and
                      embryo development.
                    </li>
                    <li>
                      <b>Underlying Fertility Issues :</b> Some conditions may
                      affect the success rates of ICSI.
                    </li>
                    <li>
                      <b>Number of ICSI Cycles :</b> Success rates often
                      increase with multiple cycles.
                    </li>
                    <li>
                      <b>Lifestyle Factors :</b> Maintaining a healthy lifestyle
                      can positively impact ICSI outcomes.
                    </li>
                  </p>

                  <h2>Why Choose Jabalpur Fertility Centre for ICSI ?</h2>
                  <li>
                    <b>Expertise and Experience : </b>
                    Led by Dr. Archana Shrivastav, our team has extensive
                    experience in performing successful ICSI procedures.
                  </li>
                  <li>
                    <b>Personalized Care : </b>
                    We tailor our treatment plans to meet the unique needs of
                    each couple, ensuring the best possible outcomes.
                  </li>
                  <li>
                    <b>Comprehensive Fertility Services : </b>
                    From initial consultation and complete fertility workup to
                    advanced treatments like IVF and ICSI, we offer <br />{" "}
                    <span className="margin"></span>a full spectrum of fertility
                    services.
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
                    If you are considering ICSI as a fertility treatment option,
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

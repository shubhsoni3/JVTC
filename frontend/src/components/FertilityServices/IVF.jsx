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
    title: "Consultation",
    subTitle:
      "You can book an appointment with us by <br />calling our office, filling out an online form.",
    iconUrl: "/images/home_2/department_icon1.png",
    number: "01",
  },
  {
    title: "Baseline bloodwork and ultrasound ",
    subTitle:
      "For the IVF process, baseline bloodwork and an ultrasound are essential. These tests provide crucial information about your reproductive health, helping <br /> us tailor the most effective treatment plan for you.",
    iconUrl: "/images/home_2/department_icon2.png",
    number: "02",
  },
  {
    title: "Ovarian stimylation",
    subTitle:
      "Ovarian stimulation is a crucial part of the IVF process. It involves using medications to stimulate your ovaries, encouraging the development of multiple eggs for retrieval and fertilization..",
    iconUrl: "/images/home_2/department_icon3.png",
    number: "03",
  },
  {
    title: "Oocyte maturation",
    subTitle:
      "Oocyte maturation involves hormone treatments <br /> to ensure eggs reach full maturity, making <br />them ready for retrieval, fertilization, and<br /> subsequent  embryo development, which<br /> are crucial steps in the IVF process.",
    iconUrl: "/images/home_2/department_icon4.png",
    number: "04",
  },
  {
    title: "Egg Retrieval",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_icon5.png",
    number: "05",
  },
  {
    title: "Fertilization",
    subTitle:
      "Egg retrieval involves collecting mature eggs from the ovaries through a minor surgical procedure, allowing them to be fertilized in the lab as part of the IVF process.",
    iconUrl: "/images/home_2/department_icon6.png",
    number: "06",
  },
  {
    title: "Embryo transfer",
    subTitle:
      "Embryo transfer is the final step in the IVF process. It involves placing the fertilized embryo into the uterus, where it can implant and develop into a successful pregnancy.",
    iconUrl: "/images/home_2/department_icon7.png",
    number: "07",
  },
  {
    title: "Two-Week wait",
    subTitle:
      "The two-week wait follows the embryo transfer in the IVF process. During this period, you'll wait to  take a <br />pregnancy test to determine if the procedure <br /> has been successful.",
    iconUrl: "/images/home_2/department_icon8.png",
    number: "08",
  },
  {
    title: "Pregnancy test",
    subTitle:
      "The pregnancy test, taken two weeks after the embryo transfer, determines if the IVF process has been successful and if implantation has occurred, indicating the start of a pregnancy.",
    iconUrl: "/images/home_2/department_icon9.png",
    number: "09",
  },
];
const faqData = [
  {
    title: "What is IVF (In Vitro Fertilization) and how does it work ?",
    content:
      "IVF, or In Vitro Fertilization, is a fertility treatment where eggs are retrieved from a woman's ovaries and fertilized with sperm in a laboratory. The resulting embryos are cultured for a few days and then transferred into the woman's uterus to achieve pregnancy. This process involves several steps, including ovarian stimulation, egg retrieval, fertilization, embryo culture, and embryo transfer.",
  },
  {
    title: "Who can benefit from IVF treatment ?",
    content:
      "IVF is recommended for individuals and couples facing various fertility challenges, including blocked or damaged fallopian tubes, severe male factor infertility (low sperm count or motility), endometriosis, unexplained infertility, failed attempts with other fertility treatments such as IUI, genetic disorders that require preimplantation genetic testing (PGT), and same-sex couples or single individuals using donor eggs, sperm, or embryos.",
  },
  {
    title: "What are the success rates of IVF ?",
    content:
      "The success rates of IVF can vary based on several factors, including the woman’s age, the cause of infertility, and the quality of the embryos. On average, success rates for IVF are approximately: Women under 35: 40-50% per cycle, women aged 35-37: 30-40% per cycle, women aged 38-40: 20-30% per cycle, and women over 40: 10-20% per cycle. Multiple cycles may be necessary to achieve a successful pregnancy.",
  },
  {
    title: "What should I expect during the IVF process ?",
    content:
      "The IVF process involves several stages: Ovarian Stimulation, where hormonal medications are used to stimulate the ovaries to produce multiple eggs; Egg Retrieval, a minor surgical procedure to collect mature eggs from the ovaries; Fertilization, where eggs are fertilized with sperm in the laboratory to create embryos; Embryo Culture, where embryos are cultured for 3-5 days to monitor their development; Embryo Transfer, where selected embryos are transferred into the uterus; and a Pregnancy Test, a blood test performed approximately two weeks after the embryo transfer to confirm pregnancy.",
  },
  {
    title: "Are there any risks or side effects associated with IVF?",
    content:
      "IVF is a safe and well-established procedure, but like any medical treatment, it has potential risks and side effects, including Ovarian Hyperstimulation Syndrome (OHSS), a rare condition where the ovaries become swollen and painful after stimulation; Multiple Pregnancies, with a higher risk of twins or triplets if multiple embryos are transferred; Ectopic Pregnancy, a rare occurrence where the embryo implants outside the uterus; Emotional Stress, as the process can be emotionally challenging and counseling is recommended to help manage stress and anxiety; and side effects from medications, such as mild side effects like bloating, mood swings, and headaches from fertility medications.",
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
          subTitle="IVF (Test Tube Baby)"
        />

        <Section topMd={200} topLg={150} topXl={110}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>Advanced IVF Treatments at Jabalpur Fertility Centre</h2>
                  <p>
                    In vitro fertilization (IVF), commonly known as the test
                    tube baby procedure, is one of the most effective forms of
                    assisted reproductive technology available today. At
                    Jabalpur Fertility Centre, the Best Fertility Clinic in
                    Jabalpur, we provide advanced IVF treatments under the
                    expert care of Dr. Archana Shrivastav, the Best IVF Doctor
                    in Jabalpur. Our goal is to help you achieve your dream of
                    parenthood through personalized, compassionate, and
                    state-of-the-art fertility care.
                  </p>

                  <h1>What is IVF ?</h1>
                  <p>
                    IVF is a process in which eggs are retrieved from a woman’s
                    ovaries and fertilized with sperm in a laboratory. The
                    resulting embryos are then cultured and monitored for
                    several days before being transferred into the woman's
                    uterus. IVF can be used to overcome a variety of fertility
                    issues and has helped countless couples conceive
                    successfully.
                  </p>
                  <h2>When is IVF Recommended ?</h2>
                  <p>
                    IVF is often recommended for couples facing the following
                    fertility issues : <br />
                    <br />
                    <li>
                      <b>Blocked or Damaged Fallopian Tubes : </b>IVF bypasses
                      the fallopian tubes, making it a viable option for women
                      with tubal factor infertility.
                    </li>
                    <li>
                      <b>Male Factor Infertility : </b> Including low sperm
                      count, poor motility, or abnormal sperm morphology.
                    </li>
                    <li>
                      <b>Ovulation Disorders : </b> Such as polycystic ovary
                      syndrome (PCOS) or premature ovarian failure.
                    </li>
                    <li>
                      <b> Endometriosis : </b> When endometrial tissue affects
                      the ovaries, fallopian tubes, or other pelvic structures.
                    </li>
                    <li>
                      <b>Unexplained Infertility : </b> When no specific cause
                      of infertility is identified after a complete fertility
                      workup.
                    </li>
                    <li>
                      <b>Previous Failed IUI or Other Treatments :</b> For
                      couples who have not had success with other fertility
                      treatments.
                    </li>
                    <li>
                      <b>Genetic Disorders : </b>To prevent the transmission of
                      genetic conditions through preimplantation genetic testing
                      (PGT).
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
            sectionTitle="How IVF Works"
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
                  <h2>Success Rates and Factors Affecting IVF</h2>
                  <p>
                    Success rates for IVF can vary based on several factors,
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
                      affect the success rates of IVF.
                    </li>
                    <li>
                      <b>Number of IVF Cycles :</b> Success rates often increase
                      with multiple cycles.
                    </li>
                    <li>
                      <b>Lifestyle Factors :</b> Maintaining a healthy lifestyle
                      can positively impact IVF outcomes.
                    </li>
                  </p>

                  <h2>Why Choose Jabalpur Fertility Centre for IUI?</h2>
                  <li>
                    <b>Expertise and Experience : </b>
                    Led by Dr. Archana Shrivastav, our team has extensive
                    experience in performing successful IVF procedures.
                  </li>
                  <li>
                    <b>Personalized Care : </b>
                    We tailor our treatment plans to meet the unique needs of
                    each couple, ensuring the best possible outcomes.
                  </li>
                  <li>
                    <b>Comprehensive Fertility Services : </b>
                    From initial consultation and complete fertility workup to
                    advanced treatments like IVF and IUI, we offer <br />{" "}
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
                    If you are considering IVF as a fertility treatment option,
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

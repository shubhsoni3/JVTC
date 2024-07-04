import React from "react";
import Section from "../Section";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import styled from "styled-components";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";

const faqData = [
  {
    title:
      "What is egg donation and sperm donation, and who can benefit from these services ?",
    content:
      "Egg donation and sperm donation are fertility treatments where eggs or sperm from a donor are used to help individuals and couples achieve pregnancy. These services benefit women with ovarian failure or diminished ovarian reserve, men with severe male factor infertility, individuals carrying genetic disorders they do not want to pass on to their offspring, and same-sex couples or single individuals wanting to have children.",
  },
  {
    title:
      "How are egg and sperm donors selected at Jabalpur Fertility Centre ?",
    content:
      "At Jabalpur Fertility Centre, egg and sperm donors undergo a rigorous screening process to ensure they are healthy and suitable. This process includes medical screening involving a comprehensive medical and family history evaluation, genetic testing to screen for genetic disorders and chromosomal abnormalities, infectious disease testing for infections such as HIV, Hepatitis B and C, and other sexually transmitted infections, a psychological evaluation to assess the donor’s mental health and emotional well-being, and a lifestyle assessment to ensure the donor leads a healthy lifestyle.",
  },
  {
    title: "What is the process of egg donation and sperm donation ?",
    content:
      "The processes of egg and sperm donation involve several steps. For egg donation: Ovarian Stimulation, where the donor receives hormonal medications to stimulate the ovaries to produce multiple eggs; Monitoring through regular blood tests and ultrasounds to track the development of the eggs; Egg Retrieval, a minor surgical procedure to retrieve mature eggs from the donor’s ovaries; and Fertilization, where the retrieved eggs are fertilized with the recipient’s partner’s sperm or donor sperm. For sperm donation: Sperm Collection, where the donor provides a sperm sample through masturbation; Sperm Analysis and Processing, where the sample is analyzed and processed to concentrate the healthiest sperm; and Cryopreservation, where the sperm sample is frozen and stored until needed for insemination or IVF.",
  },
  {
    title: "What are the success rates of using donor eggs and donor sperm ?",
    content:
      "The success rates of using donor eggs and donor sperm can be higher compared to using the intended parents' eggs and sperm, particularly if there are underlying fertility issues. Success rates vary based on factors such as the recipient’s age and health, but on average: for Egg Donation, success rates range from 50% to 70% per cycle; and for Sperm Donation, success rates vary depending on the method used (IUI or IVF) and other factors, generally ranging from 15% to 30% per cycle for IUI and higher for IVF.",
  },
  {
    title:
      "Are there any risks or legal considerations involved in egg and sperm donation ?",
    content:
      "Egg and sperm donation are generally safe procedures, but they do involve some risks and legal considerations. Medical risks for egg donors include Ovarian Hyperstimulation Syndrome (OHSS) and complications from the retrieval procedure, while sperm donation has minimal medical risks. Emotional considerations include potential emotional and psychological effects for donors, and counseling is recommended. Legal considerations are governed by strict legal guidelines at Jabalpur Fertility Centre to protect the rights and privacy of both donors and recipients. Donors typically waive parental rights, and recipients are recognized as the legal parents of any resulting children.",
  },
];

const faqData1 = [
  {
    title: "What is IUI?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How much is the Success Rate of IUI?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What is the Cost of IUI?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title:
      "When there is no Abnormality in our Tests, Why are we not having a Pregnancy?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "For which Patient, IUI is Needed?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What is Laparoscopy and who needs it?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "How is Tubal Blockage Tested?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What to do if Sperm Count is Low?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: " Why does IVF Fail?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What to do if IVF Fails?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    title: "What is the Cost of IVF treatment?",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
];

export default function EggOrSpermDonation() {
  pageTitle("EggOrSpermDonation");
  return (
    <>
      <Container>
        <BannerSectionStyle3
          bgUrl="/images/about/AboutBanner_bg.png"
          // imgUrl="/images/about/banner_img.png"
          title="Welcome to Jabalpur<br /> Fertility Center"
          subTitle="Egg Donation / Sperm Donation"
        />

        <Section topMd={200} topLg={150} topXl={110}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>Advanced Donor Programs at Jabalpur Fertility Centre</h2>
                  <p>
                    Egg donation and sperm donation are invaluable options for
                    couples struggling with infertility or genetic issues that
                    prevent them from conceiving naturally. At Jabalpur
                    Fertility Centre, recognized as the Best Fertility Clinic in
                    Jabalpur, we offer comprehensive and compassionate donor
                    programs under the expert care of Dr. Archana Shrivastav,
                    the Best IVF Doctor in Jabalpur. Our goal is to provide the
                    best possible solutions to help you achieve your dream of
                    parenthood.
                  </p>

                  <h2>What is Egg Donation ?</h2>
                  <p>
                    Egg donation involves a woman (the donor) providing her eggs
                    to another woman (the recipient) to help her conceive. This
                    option is often recommended for women who cannot produce
                    viable eggs due to various reasons, including premature
                    ovarian failure, advanced age, or genetic conditions.
                  </p>
                  <h4>When is Egg Donation Recommended ?</h4>
                  <li>
                    <b>Premature Ovarian Failure : </b>Early menopause or loss
                    of normal ovarian function before the age of 40.
                  </li>
                  <li>
                    <b>Advanced Maternal Age : </b>Women of advanced
                    reproductive age whose eggs may not be viable for
                    conception.
                  </li>
                  <li>
                    <b>Genetic Disorders : </b>Risk of passing on genetic
                    diseases or conditions.
                  </li>
                  <li>
                    <b>Previous IVF Failures : </b>Multiple failed IVF attempts
                    due to poor egg quality.
                  </li>
                  <li>
                    <b>Absence of Ovaries : </b>Due to surgery, congenital
                    absence, or medical treatments.
                  </li>
                  <br />
                  <br />
                  <h2>What is Sperm Donation ?</h2>
                  <p>
                    Sperm donation involves a man (the donor) providing his
                    sperm to assist a couple or individual in achieving
                    pregnancy. This option is often recommended for men who have
                    infertility issues or for single women and same-sex couples
                    who require donor sperm to conceive.
                  </p>
                  <h4>When is Sperm Donation Recommended ?</h4>
                  <li>
                    <b>Male Factor Infertility : </b>Severe low sperm count,
                    poor motility, or abnormal sperm morphology.
                  </li>

                  <li>
                    <b>Genetic Disorders : </b>Risk of passing on genetic
                    diseases or conditions.
                  </li>
                  <li>
                    <b>Previous Failed Fertilization : </b>
                    Multiple failed attempts at fertilization using partner's
                    sperm.
                  </li>
                  <li>
                    <b>Single Women or Same-Sex Couples : </b>Women who require
                    donor sperm to conceive
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Start FAQ Section */}
        <Section
          topMd={190}
          topLg={145}
          topXl={105}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <div className="row">
            <div className="col-xxl-6">
              <FaqSectionStyle2
                data={faqData}
                sectionTitle="Usually Asked"
                sectionTitleUp="What People"
              />
            </div>
            <div className="col-xxl-6">
              <FaqSectionStyle2
                data={faqData1}
                sectionTitle="Usually Asked"
                sectionTitleUp="What People"
              />
            </div>
          </div>
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
                  <h2>Benefits of Egg and Sperm Donation</h2>

                  <li>
                    <b>Increased Chances of Conception :</b>Donated eggs and
                    sperm often come from young, healthy individuals, increasing
                    the likelihood <br />
                    <span className="margin"></span>of successful fertilization
                    and pregnancy.
                  </li>

                  <li>
                    <b>Genetic Screening : </b>Donors undergo thorough genetic
                    screening to minimize the risk of hereditary diseases.
                  </li>

                  <li>
                    <b>Enabling Parenthood :</b>Provides an opportunity for
                    individuals and couples with severe infertility issues to
                    experience the joy of parenthood.
                  </li>
                  <br />
                  <br />
                  <h2>
                    Why Choose Jabalpur Fertility Centre for Donor Programs ?
                  </h2>
                  <li>
                    <b>Expertise and Experience : </b>Led by Dr. Archana
                    Shrivastav, our team has extensive experience in managing
                    successful egg and
                    <br />
                    <span className="margin"></span> sperm donation programs.
                  </li>
                  <li>
                    <b>Personalized Care : </b>We tailor our donor programs to
                    meet the unique needs of each couple or individual, ensuring
                    the best
                    <br />
                    <span className="margin"></span> possible outcomes.
                  </li>
                  <li>
                    <b>Comprehensive Fertility Services : </b>From initial
                    consultation and complete fertility workup to advanced
                    treatments like IVF, ICSI, and
                    <br />
                    <span className="margin"></span> donor programs, we offer a
                    full spectrum of fertility services.
                  </li>
                  <li>
                    <b>State-of-the-Art Facility : </b>Our clinic is equipped
                    with the latest technology and facilities to provide
                    top-notch fertility care.
                  </li>
                  <li>
                    <b>Confidential and Compassionate Approach : </b>We
                    prioritize your comfort, privacy, and well-being, offering
                    compassionate
                    <br />
                    <span className="margin"></span> support throughout your
                    fertility journey.
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
                    If you are considering egg or sperm donation as part of your
                    fertility treatment, contact Jabalpur Fertility Centre
                    today. Our expert team is here to guide you through the
                    process and help you achieve your dream of starting a
                    family.
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

import React from "react";
import Section from "../Section";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import styled from "styled-components";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";

const faqData = [
  {
    title: "What is embryo donation and who can benefit from it ?",
    content:
      "Embryo donation is a fertility treatment where embryos created from donated eggs and sperm are transferred to a recipient's uterus. This option can benefit couples who have undergone IVF and wish to donate their unused embryos to help others, individuals or couples with infertility issues where both egg and sperm are not viable, and same-sex couples or single individuals who need both egg and sperm donors to achieve pregnancy.",
  },
  {
    title: "What is the process of embryo donation ?",
    content:
      "The process of embryo donation involves several steps: Donor Screening, which includes comprehensive medical, genetic, and psychological screening of donors; Embryo Creation, where donor eggs are fertilized with donor sperm in a laboratory to create embryos; Embryo Freezing and Storage, where healthy embryos are frozen and stored until needed; Recipient Preparation, where the recipient undergoes hormonal treatment to prepare the uterine lining for embryo transfer; Embryo Transfer, where thawed embryos are transferred into the recipient’s uterus; and a Pregnancy Test, where a blood test is performed about two weeks after the transfer to confirm pregnancy.",
  },
  {
    title: "What are the success rates of embryo donation ?",
    content:
      "The success rates of embryo donation depend on various factors such as the quality of the donated embryos and the age and health of the recipient. On average, the success rates for embryo donation range from 40% to 60% per cycle. Multiple cycles may increase the chances of achieving a successful pregnancy.",
  },
  {
    title:
      "What are the legal and ethical considerations involved in embryo donation ?",
    content:
      "Embryo donation involves several legal and ethical considerations: Informed Consent, where both donors and recipients must provide informed consent, understanding the implications of embryo donation; Confidentiality, which is strictly maintained to protect the privacy of donors and recipients; Legal Rights, where donors typically waive parental rights and recipients are recognized as the legal parents of any resulting children; and Ethical Considerations, ensuring that the process is conducted with respect for all parties involved, including the potential child.",
  },
  {
    title: "Are there any risks associated with embryo donation ?",
    content:
      "Embryo donation is generally a safe procedure, but there are potential risks and considerations, including medical risks for the recipient similar to those of traditional IVF, such as ovarian hyperstimulation syndrome (OHSS) if hormonal medications are used, and complications from embryo transfer; emotional impact, as the process can be emotionally challenging for both donors and recipients, and counseling is recommended; pregnancy risks, such as miscarriage, ectopic pregnancy, and multiple pregnancies if more than one embryo is transferred; and ethical concerns about the genetic origins of the child and potential future contact between donors and recipients.",
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

export default function EmbryoDonation() {
  pageTitle("EmbryoDonation");
  return (
    <>
      <Container>
        <BannerSectionStyle3
          bgUrl="/images/about/AboutBanner_bg.png"
          // imgUrl="/images/about/banner_img.png"
          title="Welcome to Jabalpur<br /> Fertility Center"
          subTitle="Your Querise"
        />

        <Section topMd={200} topLg={150} topXl={110}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>
                    Advanced Embryo Donation Programs at Jabalpur Fertility
                    Centre
                  </h2>
                  <p>
                    Embryo donation is an innovative and compassionate option
                    for couples struggling with infertility. At Jabalpur
                    Fertility Centre, known as the Best Fertility Clinic in
                    Jabalpur, we offer comprehensive embryo donation programs
                    under the expert care of Dr. Archana Shrivastav, the Best
                    IVF Doctor in Jabalpur. Our goal is to provide the best
                    possible solutions to help you achieve your dream of
                    parenthood through personalized, compassionate care.
                  </p>

                  <h1>What is Embryo Donation?</h1>
                  <p>
                    Embryo donation involves the transfer of embryos created by
                    another couple who have undergone IVF treatment. These
                    embryos are donated to recipients who are unable to conceive
                    using their own eggs and sperm. This option offers a unique
                    opportunity for couples to experience pregnancy and
                    childbirth when other fertility treatments have not been
                    successful.
                  </p>
                  <h2>When is Embryo Donation Recommended ?</h2>
                  <p>
                    Embryo donation may be recommended for couples facing the
                    following fertility challenges :
                    <li>
                      <b>Advanced Maternal Age : </b>Women of advanced
                      reproductive age whose eggs may not be viable for
                      conception.
                    </li>
                    <li>
                      <b>Premature Ovarian Failure : </b>Early menopause or loss
                      of normal ovarian function before the age of 40.
                    </li>
                    <li>
                      <b>Severe Male Factor Infertility : </b>When the male
                      partner has severe issues with sperm quality or quantity.
                    </li>
                    <li>
                      <b>Genetic Disorders : </b>Risk of passing on genetic
                      diseases or conditions.
                    </li>
                    <li>
                      <b>Previous Failed IVF Cycles : </b>Multiple failed IVF
                      attempts due to poor embryo quality or other factors.
                    </li>
                    <li>
                      <b>Unexplained Infertility : </b>When no specific cause of
                      infertility is identified after a complete fertility
                      workup.
                    </li>
                  </p>

                  <br />
                  <br />
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
                  <h2>Benefits of Embryo Donation</h2>

                  <li>
                    <b>High Success Rates :</b> Donor embryos often come from
                    young, healthy individuals, increasing the likelihood of
                    successful implantation <br />
                    <span className="margin"></span> and pregnancy.
                  </li>

                  <li>
                    <b>Genetic Screening : </b>Donor embryos undergo thorough
                    genetic screening to minimize the risk of hereditary
                    diseases.
                  </li>

                  <li>
                    <b>Enabling Parenthood : </b>Provides an opportunity for
                    individuals and couples with severe infertility issues to
                    experience the joy of pregnancy
                    <br />
                    <span className="margin"></span> and childbirth
                  </li>
                  <br />
                  <br />
                  <h2>
                    Why Choose Jabalpur Fertility Centre for Embryo Donation?
                  </h2>
                  <li>
                    <b>Expertise and Experience : </b> Led by Dr. Archana
                    Shrivastav, our team has extensive experience in managing
                    successful <br />
                    <span className="margin"></span> embryo donation programs
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
                    If you are considering embryo donation as part of your
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

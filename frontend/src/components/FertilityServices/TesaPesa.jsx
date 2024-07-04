import React from "react";
import Section from "../Section";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import styled from "styled-components";
import FaqSectionStyle4 from "../FaqSection/FaqSectionStyle4";

const faqData = [
  {
    title: "What are TESA and PESA, and how do they differ ?",
    content:
      "TESA (Testicular Sperm Aspiration) and PESA (Percutaneous Epididymal Sperm Aspiration) are procedures used to retrieve sperm directly from the male reproductive organs in cases where sperm are not present in the ejaculate (azoospermia). TESA involves using a needle to extract sperm directly from the testicular tissue, while PESA involves using a needle to extract sperm from the epididymis, a duct behind the testis where sperm mature and are stored.",
  },
  {
    title: "Who can benefit from TESA/PESA procedures ?",
    content:
      "TESA and PESA are beneficial for men with obstructive azoospermia, which involves blockages in the reproductive tract preventing sperm from being ejaculated, often due to vasectomy, congenital absence of the vas deferens, or infections; non-obstructive azoospermia, which involves sperm production issues within the testes; failed vasectomy reversals, when surgical attempts to reverse vasectomy are unsuccessful; and other conditions where sperm retrieval from the testes or epididymis is necessary for assisted reproductive techniques such as IVF or ICSI.",
  },
  {
    title: "How are TESA and PESA procedures performed ?",
    content:
      "Both procedures are minimally invasive and typically performed under local anesthesia. TESA involves inserting a fine needle into the testicle to aspirate small amounts of tissue, which is then processed in the lab to extract viable sperm. PESA involves inserting a fine needle into the epididymis to aspirate fluid containing sperm, which is then processed to extract viable sperm. Both procedures are usually done on an outpatient basis and take about 20-30 minutes.",
  },
  {
    title: "What are the success rates and outcomes of TESA/PESA ?",
    content:
      "The success rates of TESA and PESA in retrieving viable sperm can vary based on the underlying cause of azoospermia. For obstructive azoospermia, success rates are often above 90% as sperm production is typically normal. For non-obstructive azoospermia, success rates generally range between 30-70% depending on the extent of sperm production issues. Retrieved sperm can be used immediately for IVF/ICSI or cryopreserved for future use. Success rates of resulting IVF/ICSI cycles depend on several factors, including the quality of the retrieved sperm and the female partner’s age and health.",
  },
  {
    title: "Are there any risks or side effects associated with TESA/PESA ?",
    content:
      "TESA and PESA are generally safe procedures with minimal risks, but potential side effects and risks include discomfort or pain at the site of needle insertion, which can be managed with over-the-counter pain medication; minor swelling or bruising of the scrotum, usually resolving within a few days; a rare risk of infection at the needle insertion site, which can be mitigated with proper aseptic techniques; minimal risk of bleeding within the scrotum, generally self-limiting and not requiring intervention; and the emotional and psychological aspects of undergoing these procedures and potential outcomes, which should be considered and supported with counseling if needed.",
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

export default function TesaPesa() {
  pageTitle("TesaPesa");
  return (
    <>
      <Container>
        <BannerSectionStyle3
          bgUrl="/images/about/AboutBanner_bg.png"
          // imgUrl="/images/about/banner_img.png"
          title="Welcome to Jabalpur<br /> Fertility Center"
          subTitle="TESA/PESA (Testicular Sperm Aspiration / Percutaneous Epididymal Sperm Aspiration)"
        />
        <Section topMd={200} topLg={150} topXl={110}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cs_blog_details">
                  <h2>
                    Advanced Male Infertility Treatments at Jabalpur Fertility
                    Centre
                  </h2>
                  <p>
                    TESA (Testicular Sperm Aspiration) and PESA (Percutaneous
                    Epididymal Sperm Aspiration) are specialized procedures
                    designed to retrieve sperm directly from the testicles or
                    epididymis of men who have fertility issues. At Jabalpur
                    Fertility Centre, known as the Best Fertility Clinic in
                    Jabalpur, we offer advanced male infertility treatments
                    under the expert guidance of Dr. Archana Shrivastav, the
                    Best IVF Doctor in Jabalpur. Our mission is to provide
                    personalized, compassionate care and effective solutions for
                    couples facing male infertility challenges.
                  </p>

                  <h2>What is TESA/PESA ?</h2>
                  <p>
                    TESA and PESA are minimally invasive procedures used to
                    collect sperm when there is a blockage or absence of sperm
                    in the ejaculate. These techniques enable men with certain
                    types of infertility to still father biological children
                    through assisted reproductive technologies like IVF and
                    ICSI.
                  </p>
                  <h4>When is TESA/PESA Recommended ?</h4>
                  <p>
                    TESA and PESA may be recommended for men with the following
                    conditions :
                    <li>
                      <b>Obstructive Azoospermia : </b>Blockage preventing sperm
                      from being ejaculated.
                    </li>
                    <li>
                      <b>Non-obstructive Azoospermia : </b>Sperm production
                      issues within the testicles.
                    </li>
                    <li>
                      <b>Previous Vasectomy : </b>Men who have undergone a
                      vasectomy and wish to father children again.
                    </li>
                    <li>
                      <b>Failed Sperm Retrieval : </b>Unsuccessful sperm
                      retrieval using other methods like microsurgical
                      techniques.
                    </li>
                  </p>
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
                  <h2>Benefits of TESA/PESA</h2>

                  <li>
                    <b>Effective Sperm Retrieval : </b>Allows men with certain
                    types of male infertility to obtain viable sperm for use in
                    assisted <br /> <span className="margin"></span>{" "}
                    reproductive technologies
                  </li>

                  <li>
                    <b>Option for Biological Fatherhood : </b>Provides an
                    opportunity for men who may otherwise be unable to conceive
                    naturally to father
                    <br /> <span className="margin"></span> biological children.
                  </li>

                  <li>
                    <b>Minimally Invasive : </b>Both TESA and PESA are
                    outpatient procedures that typically involve minimal
                    discomfort and recovery time.
                  </li>
                  <br />
                  <br />
                  <h2>Why Choose Jabalpur Fertility Centre for TESA/PESA ?</h2>
                  <li>
                    <b>Expertise and Experience : </b>Led by Dr. Archana
                    Shrivastav, our team has extensive experience in managing
                    successful TESA <br />
                    <span className="margin"></span>and PESA procedures.
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
                    <b>Patient-Centered Approach : </b>We prioritize your
                    comfort and well-being, offering compassionate support
                    throughout your fertility journey.
                    <br />
                    <span className="margin"></span>
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
                    If you are considering TESA or PESA as part of your
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

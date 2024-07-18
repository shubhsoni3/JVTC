import React from "react";
import Section from "../Section";
import FaqSectionStyle2 from "../Section/FaqSection/FaqSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";

const faqData = [
  {
    title: "What is Infertility?",
    content:
      "Infertility is defined as the inability to conceive a child after trying for at least one year without using birth control. It can be due to issues with the man, the woman, or both, and it affects the reproductive system, impairing the body's ability to perform natural functions necessary for conception.",
  },
  {
    title: "How common is infertility?",
    content:
      "Infertility affects about 10-15% of couples worldwide. In the United States, approximately 10% of women (6.1 million) aged 15-44 have difficulty getting pregnant or staying pregnant.",
  },
  {
    title: "What is Conventional IVF ?",
    content:
      "Conventional in vitro fertilization (IVF) is a process where an egg and sperm are combined outside the body in a laboratory dish to create an embryo. The embryo is then transferred to the woman’s uterus with the hope of achieving a successful pregnancy.",
  },
  {
    title: "What are the chances of getting Pregnant through IVF?",
    content:
      "The chances of getting pregnant through IVF depend on several factors including the woman's age, the cause of infertility, and the expertise of the clinic. On average, the live birth rate per IVF cycle is approximately 40% for women under the age of 35. For women aged 35 to 37, the success rate decreases to about 30%. The rate drops further to around 20% for those aged 38 to 40. Women aged 41 to 42 have a success rate of about 10%, and for those aged 43 and older, the rate is about 5%.",
  },
  {
    title: "Who can benefit from IVF?",
    content:
      "IVF can be particularly beneficial for a variety of individuals and couples facing different infertility issues. It is often recommended for couples with blocked or damaged fallopian tubes, as well as those experiencing male infertility issues such as low sperm count or poor sperm motility. Women with ovulation disorders, premature ovarian failure, or uterine fibroids may also find IVF helpful. Additionally, IVF can aid individuals with unexplained infertility or those who have genetic disorders and want to avoid passing them on to their children. Couples where one partner has a health condition that could complicate pregnancy may also benefit from IVF.",
  },
  {
    title: "What is Natural cycle IVF?",
    content:
      "Natural cycle IVF involves collecting and fertilizing the one egg that a woman releases during her normal monthly cycle without using fertility drugs to stimulate the ovaries. This approach is less invasive, but also typically results in lower success rates compared to conventional IVF.",
  },
  {
    title: "When is a woman most fertile?",
    content:
      "A woman is most fertile during ovulation, which occurs about 12 to 16 days before her next period starts. This is the time when an egg is released from the ovary and is available to be fertilized by sperm.",
  },
  {
    title: "What is Modified Natural Cycle IVF?",
    content:
      "Modified natural cycle IVF involves minimal stimulation of the ovaries with fertility drugs to produce one or a few eggs, which are then collected for fertilization. This method aims to balance the natural cycle's benefits with slightly higher success rates.",
  },
  {
    title: "What is Mild IVF?",
    content:
      "Mild IVF uses lower doses of fertility drugs over a shorter duration compared to conventional IVF. The goal is to produce fewer but high-quality eggs, reducing the risk of ovarian hyperstimulation syndrome (OHSS) and making the process less physically demanding.",
  },
  {
    title: "What is In Virto Maturation (IVM) of oocyte?",
    content:
      "In vitro maturation (IVM) is a technique where eggs are collected from the ovaries while they are still immature and matured in the laboratory before being fertilized by sperm. This method can be beneficial for women who are at risk of OHSS.",
  },
  {
    title: "How is ICSI different from IVF?",
    content:
      "Intracytoplasmic sperm injection (ICSI) is a variation of IVF where a single sperm is directly injected into an egg to facilitate fertilization. This technique is typically used in cases of severe male infertility, where conventional IVF might not be successful due to low sperm count or poor sperm quality.",
  },
];

const faqData1 = [
  {
    title: "What is IUI?",
    content:
      "Intrauterine insemination (IUI) is a fertility treatment that involves placing sperm directly into a woman’s uterus around the time of ovulation to facilitate fertilization. This procedure increases the number of sperm that reach the fallopian tubes, thereby increasing the chances of conception.",
  },
  {
    title: "How much is the Success Rate of IUI?",
    content:
      "The success rate of IUI varies based on several factors including the woman’s age, the cause of infertility, and whether fertility drugs are used. On average, the success rate per cycle is about 10-20% for women under 35, and the rate decreases with age.",
  },
  {
    title: "What is the Cost of IUI?",
    content:
      "The cost of IUI can vary widely depending on the clinic and geographic location. On average, each IUI cycle costs between $300 and $1,000, not including the cost of fertility medications if they are needed.",
  },
  {
    title:
      "When there is no Abnormality in our Tests, Why are we not having a Pregnancy?",
    content:
      "When tests show no abnormalities but pregnancy is still not achieved, the condition is often referred to as unexplained infertility. This can be due to factors that are not detectable by current diagnostic methods, such as subtle issues with egg or sperm quality, implantation problems, or timing of intercourse.",
  },
  {
    title: "For which Patient, IUI is Needed?",
    content:
      "IUI is often recommended for couples with mild male infertility (low sperm count or motility), women with cervical mucus problems, couples with unexplained infertility, and for those who need donor sperm. It may also be used for couples where the male partner has difficulty with ejaculation.",
  },
  {
    title: "What is Laparoscopy and who needs it?",
    content:
      "Laparoscopy is a minimally invasive surgical procedure used to diagnose and treat conditions within the abdomen and pelvis. It involves inserting a thin, lighted tube through a small incision. It is commonly used for women experiencing unexplained infertility, pelvic pain, or suspected conditions such as endometriosis, fibroids, or tubal blockages.",
  },
  {
    title: "How is Tubal Blockage Tested?",
    content:
      "Tubal blockage is typically tested using a hysterosalpingography (HSG) test. This involves injecting a dye into the uterus and fallopian tubes and taking X-ray images to see if the dye flows freely through the tubes. Other methods include laparoscopy and sonohysterography.",
  },
  {
    title: "What to do if Sperm Count is Low?",
    content:
      "If a low sperm count is diagnosed, treatment options may include lifestyle changes (e.g., improving diet, reducing alcohol intake, quitting smoking), medications or hormone treatments to improve sperm production, and assisted reproductive technologies like IUI or IVF with intracytoplasmic sperm injection (ICSI).",
  },
  {
    title: " Why does IVF Fail?",
    content:
      "IVF can fail due to various reasons such as poor egg quality, poor sperm quality, genetic abnormalities in the embryo, problems with the uterine lining, or issues during the embryo transfer process. Age and underlying health conditions can also affect the success of IVF.",
  },
  {
    title: "What to do if IVF Fails?",
    content:
      "If IVF fails, it is important to consult with your fertility specialist to review the cycle and determine potential reasons for the failure. Possible steps may include changing the IVF protocol, addressing any identified issues, considering additional fertility treatments like ICSI or donor eggs/sperm, and exploring alternative treatments such as surrogacy or adoption.",
  },
  {
    title: "What is the Cost of IVF treatment?",
    content:
      "The cost of IVF treatment can vary widely depending on the clinic, geographic location, and specific treatment plan. On average, a single cycle of IVF in the United States ranges from $12,000 to $15,000, not including the cost of medications, which can add several thousand dollars to the total cost.",
  },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/AboutBanner_bg.png"
        // imgUrl="/images/about/banner_img.png"
        title="Welcome to Jabalpur<br /> Fertility Center"
        subTitle="Your Querise"
      />
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
    </>
  );
}

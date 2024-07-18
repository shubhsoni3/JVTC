import React from "react";
import Section from "../Section";
import FaqSection from "../Section/FaqSection";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import AppointmentSection from "../Section/AppointmentSection";

const faqData = [
  {
    title: "Thin Endometrium",
    content:
      "A thin endometrium can be caused by hormonal imbalances, insufficient blood flow, or certain medications. Treatments may include hormone therapy (like estrogen), improving blood flow (with medications or lifestyle changes), and using procedures like endometrial scratching.",
  },
  {
    title: "Fibroid Uterus",
    content:
      "Fibroids are non-cancerous growths in the uterus that can affect fertility by blocking the fallopian tubes, altering the shape of the uterus, or causing hormonal imbalances. Treatment options include medication, surgery (myomectomy), or minimally invasive procedures like uterine artery embolization.",
  },
  {
    title: "Unexplained Infertility",
    content:
      "Unexplained infertility is diagnosed when no specific cause is found after standard fertility tests. Treatment options may include fertility drugs, intrauterine insemination (IUI), or in vitro fertilization (IVF).",
  },
  {
    title: "Polycystic Ovarian Syndrome/Disease (PCOS/PCOD)",
    content:
      "PCOS/PCOD can cause irregular menstrual cycles, anovulation, and hormonal imbalances, affecting fertility. Treatments include lifestyle changes, medications to induce ovulation (like clomiphene or letrozole), and IVF if necessary.",
  },
  {
    title: "Endometriosis",
    content:
      " Endometriosis, where tissue similar to the uterine lining grows outside the uterus, can cause inflammation and adhesions affecting fertility. Treatments include pain management, hormone therapy, and surgery to remove endometrial tissue. IVF may also be an option.",
  },
  {
    title: "Failed IVF",
    content:
      " After a failed IVF cycle, steps include a thorough review of the cycle to identify issues, adjusting treatment protocols, considering additional tests, and exploring alternative fertility treatments or techniques such as assisted hatching or preimplantation genetic testing.",
  },
  {
    title: "Failed IUI",
    content:
      "After a failed IUI cycle, options include repeating the IUI with adjustments (different medications or timing), moving to IVF, or considering additional fertility tests to identify underlying issues.",
  },
  {
    title: "Repeated Abortion",
    content:
      "Repeated miscarriages can be caused by genetic factors, hormonal imbalances, uterine abnormalities, or immune system issues. Treatments vary based on the cause and may include hormone therapy, surgical correction of uterine issues, or addressing immune system problems.",
  },
  {
    title: "Decreased Ovarian Reserve",
    content:
      "Decreased ovarian reserve refers to a lower number of quality eggs in the ovaries, often related to age. Management includes using fertility drugs to stimulate the ovaries, IVF with egg retrieval, and considering egg donation.",
  },
  {
    title: "Fertility Preservation",
    content:
      "Fertility preservation options include egg or sperm freezing, embryo freezing, and ovarian tissue freezing. These methods are often used before medical treatments (like chemotherapy) that might affect fertility or for those wishing to delay childbearing.",
  },
  {
    title: "Low Or Nil Sperm Count",
    content:
      "Low or nil sperm count can be caused by hormonal issues, genetic conditions, lifestyle factors, or medical treatments. Treatments include lifestyle changes, medication, surgery, or assisted reproductive techniques like IUI or IVF with intracytoplasmic sperm injection (ICSI).",
  },
  {
    title: "Assisted hatching",
    content:
      " Assisted hatching is a lab technique used in IVF where the outer shell of the embryo is thinned or opened to help it implant in the uterus. It is often used for patients with repeated IVF failures, older women, or embryos with thick outer shells.",
  },
  {
    title: "Blastocyst Culture",
    content:
      " Assisted hatching is a lab technique used in IVF where the outer shell of the embryo is thinned or opened to help it implant in the uterus. It is often used for patients with repeated IVF failures, older women, or embryos with thick outer shells.",
  },
  {
    title: "High Sperm DFI",
    content:
      "High sperm DFI, indicating DNA damage in sperm, can be caused by oxidative stress, infections, lifestyle factors, or age. Treatments include lifestyle changes, antioxidant therapy, and using advanced sperm selection techniques in IVF.",
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
        subTitle="Couple Fertility Evaluation"
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
        <FaqSection
          data={faqData}
          sectionTitle=" SOLUTION FOR"
          sectionTitleUp="YOU WANT"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Appointment Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.png"
        />
      </Section>
      {/* End Appointment Section */}
    </>
  );
}

// import React from "react";
// import Section from "../Section";
// import FaqSection from "../Section/FaqSection";
// import { pageTitle } from "../../helpers/PageTitle";
// import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";

// const faqData = [
//   {
//     title: "What services does ProHealth offer?",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
//   },
//   {
//     title: "How do I schedule an appointment with ProHealth?",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
//   },
//   {
//     title: "Do you accept insurance?",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
//   },
//   {
//     title: "What should I bring to my appointment?",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
//   },
//   {
//     title: "How do I request a prescription refill?",
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
//   },
// ];

// export default function Home() {
//   pageTitle("Home");
//   return (
//     <>
//       <BannerSectionStyle3
//         bgUrl="/images/about/AboutBanner_bg.png"
//         // imgUrl="/images/about/banner_img.png"
//         title="Welcome to Jabalpur<br /> Fertility Center"
//         subTitle="Couple Fertility Evaluation"
//       />

//       {/* Start FAQ Section */}
//       <Section
//         topMd={190}
//         topLg={145}
//         topXl={105}
//         bottomMd={200}
//         bottomLg={150}
//         bottomXl={110}
//       >
//         <FaqSection
//           data={faqData}
//           sectionTitle=" SOLUTION FOR"
//           sectionTitleUp="YOU WANT"
//         />
//       </Section>
//       {/* End FAQ Section */}
//     </>
//   );
// }

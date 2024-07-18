import React from "react";
import SiderMenuWidget from "../Widget/SiderMenuWidget";
import RecentPostWidget from "../Widget/RecentPostWidget";
import NewsletterStyle5 from "../Widget/NewsletterStyle5";
const categoryData = [
  // {
  //   title: "Health Tips and Tricks",
  //   url: "/",
  // },
  // {
  //   title: "Trends and Analysis",
  //   url: "/",
  // },
  // {
  //   title: "Time Management",
  //   url: "/",
  // },

  { image: "/images/blog/hysteroscopy.jpg" },
  { image: "/images/blog/Laparoscopic-surgery.png" },
];
const recentPostData = [
  {
    title: `Advanced IUI Treatments at Jabalpur Fertility Centre`,
    author: "Dr. Archana Shrivastav",
    date: "August 10, 2023",
    href: "/IUI",
  },
  {
    title: `Advanced IVF Treatments`,
    author: "Dr. Archana Shrivastav",
    date: "August 10, 2023",
    href: "/IVF",
  },
  {
    title: `Advanced ICSI Treatments at Jabalpur Fertility Centre`,
    author: "Dr. Archana Shrivastav",
    date: "August 10, 2023",
    href: "/ICSI",
  },
  {
    title: `Advanced Male Infertility Treatments at Jabalpur Fertility Centre`,
    author: "Dr. Archana Shrivastav",
    date: "August 10, 2023",
    href: "/TesaPesa",
  },
  {
    title: `Advanced Diagnostic and Surgical Techniques at Jabalpur Fertility Centre`,
    author: "Dr. Archana Shrivastav",
    date: "August 10, 2023",
    href: "/Laparoscopy",
  },
];

export default function Sidebar() {
  return (
    <div className="cs_sidebar">
      <div
      // className="cs_sidebar_item widget_categories"
      >
        <SiderMenuWidget title="Popular Categories" data={categoryData} />
      </div>
      <div className="cs_sidebar_item">
        <RecentPostWidget title="Popular Articles" data={recentPostData} />
      </div>
      <div className="cs_sidebar_item widget_categories">
        <NewsletterStyle5 title="Newsletter Sign Up Form" />
      </div>
    </div>
  );
}

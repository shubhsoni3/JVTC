import React from "react";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import Section from "../Section";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import DoctorDetailsSection from "../Section/DoctorDetailsSection";
import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import AppointmentSection from "../Section/AppointmentSection";

export default function DoctorDetails() {
  pageTitle("Doctor Details");
  return (
    <>
      <BreadcrumbStyle2 />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <DoctorDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl="/images/icons/dr.Archna.png"
          name="Dr. Archana Shrivastav, MBBS , DGO"
          department="Obstetrics, Gynecology and Laparoscopy"
          designation="Diploma in Laparoscopy (KIEL University, Germany)"
          description="With 24 years of experience in Obstetrics, Gynecology, and Laparoscopy, Dr. Archana Shrivastav is a distinguished expert in fertility treatment. She has dedicated 16 years to providing exceptional fertility care, achieving outstanding results in the field of IVF, Dr. Shrivastav is also highly skilled in performing advanced laparoscopic fertility-enhancing surgeries."
          social={[
            { icon: "fa6-brands:facebook-f", href: "https://m.facebook.com/jabalpurfertilitycentre/" },
            { icon: "fa6-brands:linkedin-in", href: "https://www.linkedin.com/in/jabalpur-fertility-centre-97504a227/" },
            { icon: "fa6-brands:twitter", href: "https://x.com/jabalpurivf1" },
          ]}
          
          contactInfo={[
            {
              iconUrl: "/images/icons/call.svg",
              title: <a href="tel:+91-7770877117">+91-7770877117</a>,
            },
            {
              iconUrl: "/images/icons/call.svg",
              title: <a href="tel:+91-9826135501">+91-9826135501</a>,
            },
            {
              iconUrl: "/images/icons/envlope.svg",
              title: (
                <a href="maito:fertilitycenterjbp@gmail.com">
                  fertilitycenterjbp@gmail.com
                </a>
              ),
            },
          ]}
          contactInfoHeading="Contact Info"
          schedules={[
            { day: "Monday", time: "11:00 AM - 04:00 PM" },
            { day: "Tuesday", time: "11:00 AM - 04:00 PM" },
            { day: "Wednesday", time: "11:00 AM - 04:00 PM" },
            { day: "Thursday", time: "11:00 AM - 04:00 PM" },
            { day: "Friday", time: "11:00 AM - 04:00 PM" },
            { day: "Saturday", time: "11:00 AM - 04:00 PM" },
            { day: "Sunday", time: "OFF" },
          ]}
          scheduleHeading="Appointment Schedules"
          degrees={[
            {
              title: "Neta Ji Subhash Chand Bose Medical College.",
              subTitle: "MBBS",
            },
            {
              title: "Topiwala National Medical College Mumbai",
              subTitle: "DGO",
            },
            {
              title: "University of KIEL Germany",
              subTitle: "Diploma In Pelviscopy / Laparoscopy",
            },
          ]}
          degreesHeading="Degrees"
          experiences={[
            {
              title:
                "Working as a Fertility Specialist at Jabalpur Fertility Center Since 16 Years.",
            },
            {
              title:
                "Expertise in complex and advanced laparoscopic and hysteroscopic surgeries, specifically in removing large fibroids of the uterus, ovarian cysts, endometriosis, and etc.",
            },
            {
              title:
                "Expert in Laparoscopic and Hysteroscopic Fertility-Enhancing Surgeries.",
            },
            {
              title: "Expert in Managing High-Risk Pregnancies.",
            },
            {
              title: "Expert in Managing Complicated Cases of Infertility.",
            },
          ]}
          experiencesHeading="Experiences"
          awards={[
            {
              title:
                "Past Secretary of the Indian Medical Association, Jabalpur Chapter.",
            },
            {
              title:
                "Past Vice President of the Jabalpur Obstetrics and Gynaecological Society.",
            },
            {
              title:
                "Recipient of the ISAR Rising Star Award in February 2024.",
            },
            {
              title:
                "Member of the European Society of Human Reproduction and Embryology (ESHRE).",
            },
          ]}
          awardHeading="Awards/Achievements"
        />
      </Section>
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
    </>
  );
}

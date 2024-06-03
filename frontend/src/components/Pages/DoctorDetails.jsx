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
          imgUrl="/images/icons/DrShrivastav.jpg"
          name="Dr. Archana Shrivastav, MD, MPH, FAPA"
          department="Psychiatry Department"
          designation="Board-certified Psychiatrist"
          description="With more than 15 years of experience learning human psychology and behavior, Dr. Jones is an expert in managing mood disorders and anxiety disorders"
          social={[
            { icon: "fa6-brands:facebook-f", href: "/about" },
            { icon: "fa6-brands:linkedin-in", href: "/about" },
            { icon: "fa6-brands:twitter", href: "/about" },
          ]}
          contactInfo={[
            { iconUrl: "/images/icons/call.svg", title: "+91-9826553302" },
            {
              iconUrl: "/images/icons/envlope.svg",
              title: "dr.archanashrivastav@gmail.com",
            },
          ]}
          contactInfoHeading="Contact Info"
          schedules={[
            { day: "Monday", time: "01:00 PM - 04:00 PM" },
            { day: "Tuesday", time: "01:00 PM - 04:00 PM" },
            { day: "Wednesday", time: "01:00 PM - 04:00 PM" },
            { day: "Thursday", time: "01:00 PM - 04:00 PM" },
            { day: "Friday", time: "01:00 PM - 04:00 PM" },
            { day: "Saturday", time: "01:00 PM - 04:00 PM" },
            { day: "Sunday", time: "01:00 PM - 04:00 PM" },
          ]}
          scheduleHeading="Appointment Schedules"
          degrees={[
            {
              title: "University of California, San Francisco.",
              subTitle: "Medical degree",
            },
            {
              title:
                "University of California, Los Angeles (UCLA) Medical Center.",
              subTitle: "Completed residency training in psychiatry",
            },
            {
              title: "University of California, Berkeley.",
              subTitle: "Master of Public Health degree",
            },
          ]}
          degreesHeading="Degrees"
          experiences={[
            {
              title:
                "Worked in community mental health clinics, private practice, and academic medical centers.",
            },
            {
              title:
                "Expertise in the treatment of mood disorders, anxiety disorders, and psychotic disorders.",
            },
            {
              title: `Special interest in women's mental health and perinatal psychiatry.`,
            },
            {
              title:
                "Experience managing complex cases that involve both mental health and medical issues.",
            },
          ]}
          experiencesHeading="Experiences"
          awards={[
            { title: "Fellow of the American Psychiatric Association (FAPA)." },
            {
              title:
                "Recognized for research contributions with grants from the National Institute of Mental Health (NIMH) and the American Foundation for Suicide Prevention.",
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
      {/* <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointmentImage.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section> */}

      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section> */}
    </>
  );
}

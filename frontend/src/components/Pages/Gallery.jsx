import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import GallerySection from "../Section/GallerySection";
import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
const galleryData = [
  { imgUrl: "/images/about/IMG_3267.JPG" },
  { imgUrl: "/images/about/IMG_3206.JPG" },
  { imgUrl: "/images/about/IMG_3181.JPG" },
  { imgUrl: "/images/about/IMG_3156.JPG" },
  { imgUrl: "/images/about/IMG_3116.JPG" },
  { imgUrl: "/images/about/IMG_3115.JPG" },
  { imgUrl: "/images/about/IMG_3045.JPG" },
  { imgUrl: "/images/about/IMG_2986.JPG" },
  { imgUrl: "/images/about/IMG_2975.JPG" },
  { imgUrl: "/images/about/IMG_3267.JPG" },
  { imgUrl: "/images/about/IMG_3181.JPG" },
];

export default function Gallery() {
  pageTitle("Gallery");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.png"
        imgUrl="/images/about/banner_img.png"
        title="Welcome to <br>JABALPUR IVF Gallery"
        subTitle="The special moment of our Jabalpur IVF Center"
      />
      <Section
        topMd={170}
        topLg={120}
        topXl={80}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <GallerySection
          sectionTitle="Celebrating Joyful Moments <br />With  Our Happy Patients"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      
      <Section topMd={10}
        topLg={10}
        topXl={20}
         >
          <BannerSectionStyle7
          imgUrl="/images/departments/banner_img_3.png"
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
        </Section>
    </>
  );
}

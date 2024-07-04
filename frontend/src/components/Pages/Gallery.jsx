import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import GallerySectionStyle2 from "../Section/GallerySection/GallerySectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import GallerySection from "../Section/GallerySection";
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
      {/* <Section
        topMd={10}
        topLg={10}
        topXl={20}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <GallerySectionStyle2 data={galleryData} />
      </Section> */}

      <Section
        className="cs_footer_margin_0"
        bottomMd={200}
        bottomLg={150}
        bottomXl={50}
      >
        <BannerSectionStyle9
          title="Don’t Let Your <br />Parenthood Journey <br /> Take  a Backseat, <br /> Together!"
          subTitle="Embark on your journey to parenthood with confidence by <br /> scheduling an appointment with our esteemed fertility specialists <br /> today. At our center, we understand the complexities of fertility <br /> treatment and offer personalized care tailored to your needs. Our <br /> experienced medical professionals will guide you every step <br /> of the way, providing compassionate support and cutting-edge <br /> expertise. Don't delay your dreams any longer – take the first <br /> step towards building your family today."
          imgUrl="/images/about/Child.jpg"
        />
      </Section>
    </>
  );
}

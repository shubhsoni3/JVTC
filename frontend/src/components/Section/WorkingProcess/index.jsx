import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import IconBoxStyle3 from "../../IconBox/IconBoxStyle3";
import { Container } from "react-bootstrap";
import styled from "styled-components";

// const BackgroundContainer = styled.div`
//   background-image: url("/images/blog/ICHI.webp");
//   background-size: cover;
//   background-position: center;
//   padding: 60px 0; /* Adjust as needed */
// `;

export default function WorkingProcess({
  sectionTitle,
  sectionTitleUp,
  sectionTitleDown,
  sectionSubTitle,
  data,
}) {
  return (
    // <BackgroundContainer>
    <Container>
      <div className="cs_shape_wrap bg">
        <div className="cs_shape_1 cs_position_2" />
        <div className="container">
          <SectionHeading
            title={sectionTitle}
            titleUp={sectionTitleUp}
            titleDown={sectionTitleDown}
            subTitle={sectionSubTitle}
            center
          />
          <Spacing md="105" lg="50" />
          <div className="cs_iconbox_3_wrap">
            {data?.map((item, index) => (
              <IconBoxStyle3 key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
    // </BackgroundContainer>
  );
}

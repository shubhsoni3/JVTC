import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
export default function TextWidget({ logoUrl, text , heading }) {
  return (
    <Container>
      <div className="cs_text_widget">
        {logoUrl && <img className="classs" src={logoUrl} alt="Logo" />}
        {text && <p className="">{parse(text)}</p>}
        {/* {heading && <h2 className="cs_newsletter_title cs_white_color mt-3">{parse(heading)}</h2>} */}
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media only screen and (min-width: 1200px) and (max-width: 2100px) {
    .classs {
      margin-left: 8rem;
      margin-top: 30px;
    }
  }
    @media only screen and (min-width:280px) and (max-width:700px) {
    .classs {
    margin-left:-30px;
      margin-top: 30px;
    }
  }
`;

import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
export default function TextWidget({ logoUrl, text }) {
  return (
    <Container>
      <div className="cs_text_widget">
        {logoUrl && <img className="classs" src={logoUrl} alt="Logo" />}
        {text && <p className="">{parse(text)}</p>}
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    .classs {
      margin-left: 8rem;
      margin-top: 30px;
    }
  }
`;

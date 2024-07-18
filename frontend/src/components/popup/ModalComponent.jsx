import React from "react";
import { Modal, Button, Container as BootstrapContainer } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactIndex";
import styled from "styled-components";

const ModalComponent = ({ show, handleClose }) => {
  return (
    <Container>
      <BootstrapContainer className="me-5">
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
          <ModalBodyStyled>
            <CloseButton variant="close" onClick={handleClose} aria-label="Close" />
            <Content>
              <ContactForm sectionTitleUp="WAITING FOR PREGNANCY?" sectionTitle="Fill the Details" />
            </Content>
          </ModalBodyStyled>
        </Modal>
      </BootstrapContainer>
    </Container>
  );
};

export default ModalComponent;

const Container = styled.div`
  .custom-modal .modal-dialog {
    max-width: 100%;
    margin: auto;
    @media (min-width: 576px) {
      max-width: 540px; /* Mobile devices */
    }
    @media (min-width: 768px) {
      max-width: 720px; /* Tablets */
    }
    @media (min-width: 992px) {
      max-width: 960px; /* Laptops */
    }
    @media (min-width: 1200px) {
      max-width: 1140px; /* Large screens */
    }
  }
`;

const ModalBodyStyled = styled(Modal.Body)`
  // margin-left: -20px;
  border-radius:25px;
  background-image: url("/images/contact/HeroContacts.png");
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  @media (min-width: 576px) {
    width: 500px; /* Mobile devices */
    // margin-left: -60px;
  }
  @media (min-width: 768px) {
    width: 670px; /* Tablets */
    margin-left: -60px;
  }
  @media (min-width: 992px) {
    width: 750px; /* Laptops */
  }
  @media (min-width: 1200px) {
    width: 900px; /* Large screens */
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
`;

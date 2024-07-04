import React from "react";
import {
  Modal,
  Button,
  Container as BootstrapContainer,
} from "react-bootstrap";
import ContactForm from "../ContactForm/ContactIndex";
import styled from "styled-components";

const ModalComponent = ({ show, handleClose }) => {
  return (
    <Container>
      <BootstrapContainer className="me-5">
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
          <ModalBodyStyled>
            <CloseButton
              variant="close"
              onClick={handleClose}
              aria-label="Close"
            />
            <Content>
              <ContactForm
                sectionTitleUp="WAITING FOR PREGNANCY?"
                sectionTitle="Fill the Details"
              />
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
    max-width: 1000px;
    margin: auto;
  }
`;

const ModalBodyStyled = styled(Modal.Body)`
  margin-left: -80px;
  background-image: url("/images/contact/HeroContacts.png");
  background-size: cover;
  background-position: center;
  position: relative;
  width: 670px;
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

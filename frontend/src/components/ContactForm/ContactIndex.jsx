import React, { useState } from "react";
import axios from "axios";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function ContactForm({ sectionTitle, sectionTitleUp }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/PatientDetail",
        formData
      );
      if (response.status === 200) {
        alert("Data saved and email sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while sending data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };


  return (
    <div className="cs_contact_form cs_style_2 cs_radius_30">
      <div className="row">
        <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
        <Spacing md="10" lg="10" />
        <form
        onSubmit={onSubmit}
        className="row st-contact-form st-type1"
        method="post"
        id="contact-form"
        >
        <div className="col-lg-6">
          <label className="d-flex justify-content-start cs_input_label cs_heading_color">
            Full Name
          </label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Enter Your Name"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              required
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className=" d-flex justify-content-start cs_input_label cs_heading_color">
            Email
          </label>
          <input
            type="email"
            className="cs_form_field"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="d-flex justify-content-start cs_input_label cs_heading_color">
            Contact Number
          </label>
          <input
            type="text"
            className="cs_form_field"
            id="phone"
            name="phone"
            placeholder="7000XXXXXX"
            required
            onChange={handleInputChange}
            value={formData.phone}
            onKeyPress={handleKeyPress}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="d-flex justify-content-start cs_input_label cs_heading_color">
            Message
          </label>
          <textarea
            cols={30}
            rows={3}
            id="message"
            name="message"
            className="cs_form_field"
            placeholder="Write something..."
            defaultValue={""}
            onChange={handleInputChange}
            value={formData.message}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <div className="" />
          <button
              className="cs_btn cs_style_1"
              type="submit"
              id="submit"
              name="submit"
            >
              <span>{loading ? "Sending..." : "Submit"}</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
        </div>
        </form>
      </div>
    </div>
  );
}

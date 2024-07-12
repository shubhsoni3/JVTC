import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
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
        "http://localhost:4000/api/auth/contact",
        formData
      );
      if (response.status === 200) {
        alert("Data saved and email sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          subject: "",
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
    <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
      <form
        onSubmit={onSubmit}
        className="row st-contact-form st-type1"
        method="post"
        id="contact-form"
      >
        <div className="row">
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Full Name</label>
            <input
              type="text"
              className="cs_form_field"
              id="name"
              name="name"
              placeholder="Shivani Shinde"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Address</label>
            <input
              type="text"
              className="cs_form_field"
              placeholder="Your address"
              id="address"
              name="address"
              required
              onChange={handleInputChange}
              value={formData.address}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Email</label>
            <input
              type="email"
              className="cs_form_field"
              id="email"
              name="email"
              placeholder="shivani@gmail.com"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">
              Mobile Number
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
            <label className="cs_input_label cs_heading_color">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="cs_form_field"
              placeholder="Your subject"
              required
              onChange={handleInputChange}
              value={formData.subject}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Message</label>
            <textarea
              cols={30}
              rows={4}
              id="message"
              name="message"
              className="cs_form_field"
              placeholder="Write something..."
              onChange={handleInputChange}
              value={formData.message}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>

          <div className="col-lg-12">
            <div className="cs_height_18" />
            <button
              className="cs_btn cs_style_1"
              type="submit"
              id="submit"
              name="submit"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

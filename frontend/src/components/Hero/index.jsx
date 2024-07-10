import React, { useState } from "react";
import parse from "html-react-parser";
import VideoModal from "../VideoModal";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import axios from "axios";

export default function Hero({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  videoBtnText,
  videoUrl,
  infoList,
  dateList,
  contactList,
  btnText,
  btnUrl,
}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can add any additional logic here, such as updating form data
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log(formData);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://drashishcardio.com/api/auth/appointment",
        formData
      );
      if (response.status === 200) {
        alert("Data saved and email sent successfully");

        setFormData({ name: "",phone: "", date: ""});
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while sending data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <section className="cs_hero cs_style_1">
        <div
          className="cs_hero_wrap cs_bg_filed"
          style={{ backgroundImage: `url(${bgUrl})` }}
        >
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
              <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
                {parse(subTitle)}
              </p>
              <div className="cs_hero_btn_wrap">
                <VideoModal
                  videoUrl={videoUrl}
                  videoBtnText={videoBtnText}
                  variant="cs_heading_color"
                />
              </div>
            </div>

            {/* <img src={imgUrl} alt="Hero" className="cs_hero_img" /> */}
            <form
              method="POST"
              className="st-appointment-form"
              id="BookNow"
              onSubmit={onSubmit}
            >
            <div className="cs_hero_info_wrap cs_shadow_1 cs_white_bg cs_radius_15">
              {infoList.map((item, index) => (
                <div className="cs_hero_info_col" key={index}>
                  <div className="cs_hero_info d-flex align-items-center">
                    <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
                      <img src={item.iconUrl} alt="Icon" />
                    </div>
                    <div className="cs_hero_info_right">
                      <h3 className="cs_hero_info_title cs_semibold">
                        {item.title}
                      </h3>
                      <p className="cs_hero_info_subtitle cs_fs_20">
                        <input
                          type="text"
                          id={`name_${index}`} 
                          name="name"
                          placeholder={`Enter ${item.title}`} 
                          onChange={handleInputChange}
                          value={formData.name}
                          required
                          className="input-field" 
                        />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {dateList.map((item, index) => (
                <div className="cs_hero_info_col" key={index}>
                  <div className="cs_hero_info d-flex align-items-center">
                    <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
                      <img src={item.iconUrl} alt="Icon" />
                    </div>
                    <div className="cs_hero_info_right">
                      <h3 className="cs_hero_info_title cs_semibold">
                        {item.title}
                      </h3>
                      <p className="cs_hero_info_subtitle cs_fs_20">
                        <ReactDatePicker
                          name="date"
                          type="date"
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="dd/mm/yy"
                          id={`date_${index}`} 
                          className="input-field"
                          value={formData.date}
                          required
                        />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {contactList.map((item, index) => (
                <div className="cs_hero_info_col" key={index}>
                  <div className="cs_hero_info d-flex align-items-center">
                    <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
                      <img src={item.iconUrl} alt="Icon" />
                    </div>
                    <div className="cs_hero_info_right">
                      <h3 className="cs_hero_info_title cs_semibold">
                        {item.title}
                      </h3>
                      <p className="cs_hero_info_subtitle cs_fs_20">
                        <input
                          type="text"
                          id={`phone_${index}`}
                          name="phone"
                          placeholder={`Enter ${item.title}`} 
                          onChange={handleInputChange}
                          value={formData.phone}
                          required
                          className="input-field"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cs_hero_info_col">
                <Link to={btnUrl} className="cs_btn cs_style_1" 
                type="submit"
                id="appointment-submit"
                name="submit"
                >
                  <span>{loading ? "Sending" : "Book Now"}</span>
                  <i>
                    <img src="/images/icons/arrow_white.svg" alt="Icon" />
                    <img src="/images/icons/arrow_white.svg" alt="Icon" />
                  </i>
                </Link>
              </div>
            </div>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .input-field {
    border: none;
    border-bottom: 1px solid #ccc; /* Add bottom border */
    padding: 8px 12px; /* Adjust padding as needed */
    font-size: 16px; /* Adjust font size as needed */
    width: 100%; /* Ensure input spans full width */
    box-sizing: border-box; /* Include padding and border in width calculation */
    border-radius: 8px; /* Add rounded corners */
  }

  .input-field:focus {
    outline: none; /* Remove default focus outline if desired */
    border-color: #e12454; /* Example: change border color on focus */
  }
`;

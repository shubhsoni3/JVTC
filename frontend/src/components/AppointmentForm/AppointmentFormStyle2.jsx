import React, { useState } from "react";
// import axios from "axios";

export default function AppointmentFormStyle2() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "http://drashishcardio.com/api/auth/BookNow",
  //       formData
  //     );
  //     alert("save data and send email successfully");
  //     setFormData({ name: "", date: "", phone: "" });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const infoList = [
    {
      iconUrl: "/images/icon1.svg",
      title: "Title 1",
      subTitle: "Subtitle 1",
    },
    {
      iconUrl: "/images/icon2.svg",
      title: "Title 2",
      subTitle: "Subtitle 2",
    },
    // Add more items as needed
  ];

  return (
    <div>
      {infoList.map((item, index) => (
        <div className="cs_hero_info_col" key={index}>
          <div className="cs_hero_info d-flex align-items-center">
            <div className="cs_hero_info_icon cs_center rounded-circle cs_accent_bg">
              <img src={item.iconUrl} alt="Icon" />
            </div>
            <div className="cs_hero_info_right">
              <h3 className="cs_hero_info_title cs_semibold">{item.title}</h3>
              <p className="cs_hero_info_subtitle cs_fs_20">{item.subTitle}</p>
            </div>
          </div>
        </div>
      ))}

      <form
        className="cs_appointment_form cs_style_1 cs_type_1 cs_fs_20 position-relative"
        id="BookNow"
        // onSubmit={onSubmit}
      >
        <div className="cs_appointment_form_field">
          <div className="cs_appointment_form_icon cs_center rounded-circle cs_white_bg">
            <img src="/images/home_4/appointment_icon_2.svg" alt="Icon" />
          </div>
          <div className="cs_appointment_form_field_right">
            <label>Patient Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Shubhnshu Jaiswal"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
          </div>
        </div>

        <div className="cs_appointment_form_field">
          <div className="cs_appointment_form_icon cs_center rounded-circle cs_white_bg">
            <img src="/images/home_4/appointment_icon_1.svg" alt="Icon" />
          </div>
          <div className="cs_appointment_form_field_right">
            <label>Booking Date</label>
            <input
              name="date"
              type="date"
              id="date"
              placeholder="01/04/2025"
              onChange={handleInputChange}
              value={formData.date}
              required
            />
          </div>
        </div>

        <div className="cs_appointment_form_field">
          <div className="cs_appointment_form_icon cs_center rounded-circle cs_white_bg">
            <img src="/images/home_4/appointment_icon_3.svg" alt="Icon" />
          </div>
          <div className="cs_appointment_form_field_right">
            <label>Contact Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+91 - 7000XXXXXX"
              onChange={handleInputChange}
              value={formData.phone}
              required
            />
          </div>
        </div>
        <button className="cs_btn cs_style_1 w-100">
          <span>Book Now</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </form>
    </div>
  );
}

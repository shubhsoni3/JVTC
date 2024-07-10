import { Icon } from "@iconify/react";
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    visit: "",
    record: "",  
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
        "http://localhost:3000/api/auth/appointment",
        formData
      );
      if (response.status === 200) {
        alert("Data saved and email sent successfully");

        setFormData({ name: "", phone: "", record:"", date: "", time:"", visit: "" });
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while sending data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Manage date and time through state
  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date ? date.toISOString().slice(0, 10) : ""
    }));
  };

  const handleTimeChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      time: event.target.value
    }));
  };

  const handleRadioChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      visit: event.target.value
    }));
  };

  return (
    <form 
      action="#"
      method="POST"
      id="appointment-form" 
      className="row"
      onSubmit={onSubmit}
    >
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Full Name</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Shivani Shinde"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          id="phone"
          name="phone"
          placeholder="+91 - 7000XXXXXX"
          onChange={handleInputChange}
          value={formData.phone}
          required
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">
          Medical Record Number
        </label>
        <input 
          type="text" 
          className="cs_form_field" 
          placeholder="782DF45"                      
          onChange={handleInputChange}
          value={formData.record}
          name="record"  // Add this line
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Preferred Date
        </label>
        <div className="cs_with_icon_input">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
            selected={formData.date ? new Date(formData.date) : null} 
            onChange={handleDateChange}  
            name="date"
            id="date"
            required
          />
          <i>
            <Icon icon="fa6-solid:calendar-days" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Preferred Time
        </label>
        <div className="cs_with_icon_input">
          <input
            type="time"
            className="cs_form_field cs_timepicker"
            placeholder="10:00AM"
            onChange={handleTimeChange}  
            value={formData.time}
            required
          />
          <i>
            <Icon icon="fa6-regular:clock" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">
          Reason for Visit
        </label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="visit"
              id="routineCheckup"
              value="routineCheckup"
              onChange={handleRadioChange} 
              checked={formData.visit === "routineCheckup"}
            />
            <label className="cs_radio_label" htmlFor="routineCheckup">
              Routine Checkup
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="visit"
              id="newPatientVisit"
              value="newPatientVisit"
              onChange={handleRadioChange}  
              checked={formData.visit === "newPatientVisit"}
            />
            <label className="cs_radio_label" htmlFor="newPatientVisit">
              New Patient Visit
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="visit"
              id="specificConcern"
              value="specificConcern"
              onChange={handleRadioChange} 
              checked={formData.visit === "specificConcern"}
            />
            <label className="cs_radio_label" htmlFor="specificConcern">
              Specific Concern
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1"
          type="submit"
          id="appointment-submit"
          name="submit"
        >
          <span>
            {loading ? "Sending" : "Submit"}
          </span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}

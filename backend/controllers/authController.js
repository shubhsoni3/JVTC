const express = require("express");
const { db } = require("../connect");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const appointment = (req, res) => {
  const {name, phone, record, date, time, visit } = req.body;
  console.log(email);
  if (!name || !phone || !record || !date || !time || !visit) {
    return res
      .status(400)
      .json({ error: "Missing required fields in the request." });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  console.log("email", email);
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "appointment for IVF",
    text: `Name: ${name},\n\nMobile number: "${phone}",\n\nRecord number is: "${record}", \n\nAppointment Date is: "${date}",\n\nTime: "${time}",\n\nVisit: "${visit}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("An error occurred while sending the email.");
    }

    console.log("Email sent:", info.response);

    // Save data to the database
    const insertQuery =
      "INSERT INTO appointmentz (	patient_name, mobile_number, record_number, appointment_date, appointment_time, visit) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name, phone, record, date, time, visit];

    db.query(insertQuery, values, (dbError, result) => {
      if (dbError) {
        console.error("Error saving data to the database:", dbError);
        return res
          .status(500)
          .send("An error occurred while saving data to the database.");
      }

      console.log("Data saved to the database:", result);
      res.status(200).send("Email sent and data saved successfully!");
    });
  });
};

const BookNow = (req, res) => {
  const { name, date, phone } = req.body;
  // console.log(email);
  if (!name ||  !date|| !phone) {
    return res
      .status(400)
      .json({ error: "Missing required fields in the request." });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  // console.log("email", email);
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "Appointments From Booking",
    text: `Booking_Patient_Name: ${name},\nBooking Date: ${date},\nbooking_mobile_number: ${phone}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .send("An error occurred while sending the email .");
    }

    console.log("Email sent:", info.response);

    // Save data to the database
    const insertQuery =
      "INSERT INTO bookingnow (Booking_Patient_Name, Booking Date, booking_mobile_number ) VALUES (?, ?, ?)";
    const values = [name, date, phone];
    console.log(name, date, phone);

    db.query(insertQuery, values, (dbError, result) => {
      if (dbError) {
        console.error("Error saving data to the database:", dbError);
        return res
          .status(500)
          .send("An error occurred while saving data to the database.");
      }

      console.log("Data saved to the database:", result);
      res.status(200).send("Email sent and data saved successfully!");
    });
  });
};

const contact = (req, res) => {
  const {name , address , email , phone , subject , message} = req.body;
  console.log(email);
  if (!name || !address || !email || !phone || !subject || !message) {
    return res
      .status(400)
      .json({ error: "Missing required fields in the request." });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.EMAILPASSWORD,
    },
  });

  console.log("email", email);
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "Contact for Cardiology",
    text: `Name: ${name},\n\nAddresh:"${address}", \n\nemail: "${email}",\n\nContact number : "${phone}", \n\nSubject: "${subject}",\n\nmessage: "${message}"`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("An error occurred while sending the email.");
    }

    console.log("Email sent:", info.response);

    // Save data to the database
    const insertQuery =
      "INSERT INTO contacts (contact_Persion_name, contact_Persion_address, contact_Persion_email, contact_Persion_phone, contact_Persion_subject, contact_Persion_message) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name , address , email , phone , subject , message];

    db.query(insertQuery, values, (dbError, result) => {
      if (dbError) {
        console.error("Error saving data to the database:", dbError);
        return res
          .status(500)
          .send("An error occurred while saving data to the database.");
      }

      console.log("Data saved to the database:", result);
      res.status(200).send("Email sent and data saved successfully!");
    });
  });
};

module.exports = {
  appointment,
  BookNow,
  contact,
};

const express = require("express");
const { db } = require("../connect");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const appointment = (req, res) => {
  const {name, phone, record, date, time, visit } = req.body;
 
  if (!name || !phone  || !date || !time || !visit) {
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

 
  const mailOptions = {
    from: process.env.EMAILSENDER,
    to: "shubhsoni1996th@gmail.com",
    subject: "Appointment For Jabalpur IVF Center",
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
      "INSERT INTO appointment (patient_name, mobile_number, record_number, appointment_date, appointment_time, visit) VALUES (?, ?, ?, ?, ?, ?)";
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

const booknow = (req, res) => {
  const { name, date, phone } = req.body;
  
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
    subject: "Booking For Jabalpur IVF Center",
    text: `booking_Patient_Name: ${name},\nbooking_Date: ${date},\nbooking_mobile_number: ${phone}`,
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
      "INSERT INTO booknow (Patient_Name, Booking_Date, Mobile_number ) VALUES (?, ?, ?)";
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
    subject: "Contact For Jabalpur IVF Center",
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
      "INSERT INTO contact (contact_Persion_name, contact_Persion_address, contact_Persion_email, contact_Persion_phone, contact_Persion_subject, contact_Persion_message) VALUES (?, ?, ?, ?, ?, ?)";
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

const AdminLogin = (req, res) => {
  const { username, password } = req.body;

  const q = `SELECT * FROM admin WHERE username = ?`;

  db.query(q, [username], (err, data) => {
    if (err) {
      console.error(`Error in username ${err}`);
      return res.status(500).json({ message: "Error in username" });
    }

    if (data.length === 0) {
      console.log("User does not exist!");
      return res.status(401).json({ message: "User does not exist!" });
    }

    // Check if the provided password matches the hashed password stored in the database
    const hashedPassword = data[0].password;
    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (!result) {
        console.log("Incorrect password!");
        return res.status(401).json({ message: "Incorrect password!" });
      }

      // Password is correct, user is authenticated
      console.log("Login successful!");
      res.status(200).json({ success: true, message: "Login successful!" });
    });
  });
};

const appointmentGet = (req, res) => {
  // SQL query to select all data from response_data table
  const sql = "SELECT * FROM appointment ORDER BY appointment_Id DESC";

  // Execute the SQL query
  db.query(sql, (err, results) => {
    if (err) {
      console.log(`Error fetching contact data: ${err}`);
      res
        .status(500)
        .json({ success: false, message: "Error fetching contact data" });
    } else {
      // If successful, send the results as JSON response
      res.status(200).json({ success: true, data: results });
    }
  });
}

const booknowGet = (req, res) => {
  // SQL query to select all data from response_data table
  const sql = "SELECT * FROM booknow ORDER BY booking_id DESC";

  // Execute the SQL query
  db.query(sql, (err, results) => {
    if (err) {
      console.log(`Error fetching contact data: ${err}`);
      res
        .status(500)
        .json({ success: false, message: "Error fetching contact data" });
    } else {
      // If successful, send the results as JSON response
      res.status(200).json({ success: true, data: results });
    }
  });
};

const contactGet = (req, res) => {
  // SQL query to select all data from response_data table
  const sql = "SELECT * FROM contact ORDER BY contact_Id DESC";

  // Execute the SQL query
  db.query(sql, (err, results) => {
    if (err) {
      console.log(`Error fetching contact data: ${err}`);
      res
        .status(500)
        .json({ success: false, message: "Error fetching contact data" });
    } else {
      // If successful, send the results as JSON response
      res.status(200).json({ success: true, data: results });
    }
  });
};
module.exports = {
  appointment,
  booknow,
  contact,
  AdminLogin,
  appointmentGet,
  booknowGet,
  contactGet,
};

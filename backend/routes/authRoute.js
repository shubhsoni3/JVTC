const express = require("express");
const {
  appointment,
  booknow,
  contact,
  // getAppointments,
  // getBookings,
  // getContactById,

} = require("../controllers/authController");

const router = express.Router();

router.post("/appointment", appointment);
router.post("/booknow", booknow);
router.post("/contact", contact);

// app.get('/appointments', getAppointments);
// app.get('/bookings', getBookings);
// app.get('/contact/:id', getContactById);

module.exports = router;

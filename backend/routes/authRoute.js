const express = require("express");
const {
  appointment,
  booknow,
  contact,
  AdminLogin,
  appointmentGet,
  booknowGet,
  contactGet,
  // getAppointments,
  // getBookings,

} = require("../controllers/authController");

const router = express.Router();

router.post("/appointment", appointment);
router.post("/booknow", booknow);
router.post("/contact", contact);
router.post("/admin/login", AdminLogin);
router.get("/appointmentGet", appointmentGet);
router.get("/booknowGet", booknowGet);
router.get("/userdataget", contactGet);
// app.get('/appointments', getAppointments);
// app.get('/bookings', getBookings);
// app.get('/contact/:id', getContactById);

module.exports = router;

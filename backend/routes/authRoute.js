const express = require("express");
const {
  appointment,
  booknow,
  contact,
  PatientDetail,
  AdminLogin,
  appointmentGet,
  booknowGet,
  contactGet,
  PatientDetailGet,
  // getAppointments,
  // getBookings,

} = require("../controllers/authController");

const router = express.Router();

router.post("/appointment", appointment);
router.post("/booknow", booknow);
router.post("/contact", contact);
router.post("/PatientDetail" , PatientDetail,)
router.post("/admin/login", AdminLogin);
router.get("/appointmentGet", appointmentGet);
router.get("/booknowGet", booknowGet);
router.get("/userdataget", contactGet);
router.get("/PatientDetailGet", PatientDetailGet,)

module.exports = router;

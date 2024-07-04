import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Appointments from "./components/Pages/Appointments";
import Departments from "./components/Pages/Departments";
import DepartmentDetails from "./components/Pages/DepartmentDetails";
import BlogDetails from "./components/Pages/BlogDetails";
import DoctorDetails from "./components/Pages/DoctorDetails";
import PricingPlan from "./components/Pages/PricingPlan";
import Gallery from "./components/Pages/Gallery";
import Timetable from "./components/Pages/Timetable";
import Contact from "./components/Pages/Contact";
import ErrorPage from "./components/Pages/ErrorPage";
import FertilityEvalution from "./components/Pages/FertilityEvalution";
import Solution from "./components/Pages/Solution.jsx";
import Querise from "./components/Pages/Querise.jsx";
import Review from "./components/Pages/Review.jsx";
import ModalComponent from "./components/popup/ModalComponent";
import CompleteWorkup from "./components/FertilityServices/CompleteWorkup.jsx";
import Counselling from "./components/FertilityServices/Counselling.jsx";
import EggOrSpermDonation from "./components/FertilityServices/EggOrSpermDonation.jsx";
import EmbryoDonation from "./components/FertilityServices/EmbryoDonation.jsx";
import FertilityPreservation from "./components/FertilityServices/FertilityPreservation.jsx";
import HysteroscopyLaparoscopy from "./components/FertilityServices/HysteroscopyLaparoscopy.jsx";
import Laparoscopy from "./components/FertilityServices/Laparoscopy.jsx";
import ICSI from "./components/FertilityServices/ICSI.jsx";
import IUI from "./components/FertilityServices/IUI.jsx";
import IVF from "./components/FertilityServices/IVF.jsx";
import LaparoscopyRemoval from "./components/FertilityServices/LaparoscopyRemoval.jsx";
import TesaPesa from "./components/FertilityServices/TesaPesa.jsx";
import AdminLogin from "./AdminDashBoard/AdminLogin.jsx";
import CareerAdmin from "./AdminDashBoard/CareerAdmin.jsx";
import ContactAdmin from "./AdminDashBoard/ContactAdmin.jsx";
import UserSign from "./AdminDashBoard/UserSign.jsx";

function App() {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem("formSubmitted", "true");
  };

  const handleShow = () => setShowModal(true);

  useEffect(() => {
    // Show modal after 5 seconds on non-admin dashboard routes if form is not submitted
    if (
      !localStorage.getItem("formSubmitted") &&
      !pathname.includes("/Admin-Page") &&
      pathname !== "/Admin-Login"
    ) {
      const timer = setTimeout(() => {
        handleShow();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Render modal only if showModal is true */}
      {showModal && (
        <ModalComponent show={showModal} handleClose={handleClose} />
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="doctors/:doctorId" element={<DoctorDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogDetails />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="departments" element={<Departments />} />
          <Route
            path="departments/:departmentId"
            element={<DepartmentDetails />}
          />
          <Route path="pricing-plan" element={<PricingPlan />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="contact" element={<Contact />} />
          <Route path="FertilityEvalution" element={<FertilityEvalution />} />
          <Route path="Solution" element={<Solution />} />
          <Route path="Querise" element={<Querise />} />
          <Route path="Review" element={<Review />} />
          {/* Fertility Services */}
          <Route path="CompleteWorkup" element={<CompleteWorkup />} />
          <Route path="Counselling" element={<Counselling />} />
          <Route path="EggOrSpermDonation" element={<EggOrSpermDonation />} />
          <Route path="EmbryoDonation" element={<EmbryoDonation />} />
          <Route
            path="FertilityPreservation"
            element={<FertilityPreservation />}
          />
          <Route path="Hysteroscopy" element={<HysteroscopyLaparoscopy />} />
          <Route path="Laparoscopy" element={<Laparoscopy />} />
          <Route path="ICSI" element={<ICSI />} />
          <Route path="IUI" element={<IUI />} />
          <Route path="IVF" element={<IVF />} />
          <Route path="LaparoscopyRemoval" element={<LaparoscopyRemoval />} />
          <Route path="TesaPesa" element={<TesaPesa />} />
          {/* End of Fertility Services */}

          <Route path="*" element={<ErrorPage />} />
        </Route>
        {/* Admin routes */}
        <Route path="/Admin-Login" element={<AdminLogin />} />
        <Route path="/Admin-Page-Career" element={<CareerAdmin />} />
        <Route path="/Admin-Page-Contact" element={<ContactAdmin />} />
        <Route path="/Admin-Page-UserSign" element={<UserSign />} />
      </Routes>
    </>
  );
}

export default App;

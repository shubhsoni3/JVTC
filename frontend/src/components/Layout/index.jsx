import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/FooterStyle4";
import Header from "../Header";

export default function Layout() {
  return (
    <>
      <Header logoSrc="/images/logo11.png" variant="cs_heading_color" />
      <Outlet />
      <Footer />
    </>
  );
}

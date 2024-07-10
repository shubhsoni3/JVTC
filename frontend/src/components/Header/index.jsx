import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Spacing from "../Spacing";
import Button from "../Button";
// import { IoIosArrowForward } from "react-icons/io";

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
                <nav className="cs_nav">
                  <ul
                    className={`${
                      mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                    }`}
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/about">About Us</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="/">Fertility Service</Link>
                      <DropDown>
                        <ul>
                          <li className="menu-item-has-children">
                            <Link to="/Counselling">Counselling</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/CompleteWorkup">
                              Comlete Fertility Workup
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/IUI">
                              IUI (Intra Uterine Insemination)
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/IVF">IVF (Test Tube Baby)</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/ICSI">ICSI</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/EggOrSpermDonation">
                              Egg Donation / Sperm donation
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/EmbryoDonation">Embryo Donation</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/TesaPesa">TESA/PESA</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/FertilityPreservation">
                              Fertility Preservation (Egg freezing and sperm
                              freezing)
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/Laparoscopy">Hysteroscopy & Laparoscopy</Link>
                          </li>

                          <li className="menu-item-has-children">
                            <Link to="/LaparoscopyRemoval">
                              Laparoscopic Removal Of Fibroids, Ovarian Cysts,
                              Endometriosis etc
                            </Link>
                          </li>
                          {/* <li className="menu-item-has-children">
                            <Link to="/FertilityEvalution">
                              Laparoscopic Removal Of Fibroids, Ovarian Cysts,
                              Endometriosis etc.
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/FertilityEvalution">
                              Laparoscopic Tubal Cannulation
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to="/FertilityEvalution">
                              Hysteroscopic Removal of Fibroide,Septum,Polyps
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>

                    <li className="menu-item-has-children">
                      <Link>Patient Guide</Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/Solution"> Are You Want Solution </Link>
                          </li>
                          <li>
                            <Link to="/Querise">Fertility Queries</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/Review">Reviews</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>

                    <li>
                      <Link to="doctors/doctor-details">Doctor</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs_menu_toggle cs_teggle_active"
                        : "cs_menu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>

              <div className="cs_main_header_right">
                <Button btnUrl="/appointments" btnText="Book Now" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`cs_sidenav ${sideNav ? "active" : ""}`}>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSideNav(!sideNav)}
        />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(!sideNav)}
          >
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <div className="cs_logo_box">
            {/* <img src="/images/logo.svg" alt="Logo" /> */}
            <div className="cs_height_15" />
            <h3 className="cs_fs_24 cs_semibold mb-0">
              Your Partner in Health and Wellness
            </h3>
          </div>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          <Spacing md="35" lg="50" xl="35" />
          <IconBoxStyle11
            title="Phone"
            subTitle="123-456-7890"
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Email"
            subTitle="hellocallcenter@gmail.com"
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Location"
            subTitle="123 Anywhere St., Any City, 12345"
            iconSrc="/images/contact/icon_3.svg"
          />
          <Spacing md="60" lg="60" xl="60" />
          <Newsletter />
          <Spacing md="70" lg="50" xl="50" />
          <hr />
          <Spacing md="70" lg="50" xl="50" />
          <SocialWidget />
        </div>
      </div>
      <div className={`cs_header_search ${searchToggle ? "active" : ""}`}>
        <div className="cs_header_search_in">
          <div className="container">
            <div className="cs_header_search_box">
              <form className="cs_search_form">
                <input type="text" placeholder="Search Doctors" />
                <button className="cs_search_btn">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.07914 0C3.62682 0 0 3.62558 0 8.07641C0 12.5272 3.62682 16.1599 8.07914 16.1599C9.98086 16.1599 11.7299 15.4936 13.1122 14.3875L16.4775 17.7498C16.6473 17.9126 16.8741 18.0024 17.1094 18C17.3446 17.9975 17.5695 17.9032 17.736 17.737C17.9025 17.5708 17.9972 17.3461 17.9999 17.111C18.0027 16.8758 17.9132 16.6489 17.7506 16.4789L14.3853 13.1148C15.4928 11.7308 16.16 9.97968 16.16 8.07641C16.16 3.62558 12.5315 0 8.07914 0ZM8.07914 1.79517C11.561 1.79517 14.3625 4.59577 14.3625 8.07641C14.3625 11.557 11.561 14.3647 8.07914 14.3647C4.59732 14.3647 1.79575 11.557 1.79575 8.07641C1.79575 4.59577 4.59732 1.79517 8.07914 1.79517Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
              <button
                className="cs_close"
                type="button"
                onClick={() => setSearchToggle(!searchToggle)}
              >
                <img src="/images/icons/close.svg" alt="Close" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSearchToggle(!searchToggle)}
        />
      </div>
    </>
  );
}


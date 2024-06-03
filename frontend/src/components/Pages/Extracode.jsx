{
  /* <header
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
                      <Link to="/">Couple Fertility Evalution</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="/">
                        Male Fertility <IoIosArrowForward />
                      </Link>
                      <DropDown>
                        <ul>
                          <li className="menu-item-has-children">
                            <Link to="/">
                              Male Fertility Test <IoIosArrowForward />
                            </Link>
                            <DropDown>
                              <ul>
                                <li>
                                  <Link to="/">Advance Semen Testing</Link>
                                </li>
                                <li>
                                  <Link to="/home-v2">
                                    Genetic Testing Fortility
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v3">
                                    DNA Fragmentation Testing In Jabalpur
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">Varicocele</Link>
                                </li>
                              </ul>
                            </DropDown>
                          </li>

                          <li className="menu-item-has-children">
                            <Link to="/">
                              Male Fertility Treatment <IoIosArrowForward />
                            </Link>
                            <DropDown>
                              <ul>
                                <li>
                                  <Link to="/">Low Or Nil Sperms Count</Link>
                                </li>
                                <li>
                                  <Link to="/home-v2">
                                    Low Or Nil Sperm Motility
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v3">Varicocele</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">ICSI</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">ICSI</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">Semen Freezing</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Tesa/Pesa(Sperm Retrival)
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Hormonal Therepy For Sperm Production
                                  </Link>
                                </li>
                              </ul>
                            </DropDown>
                          </li>
                        </ul>
                      </DropDown>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="/">
                        Female Fertility <IoIosArrowForward />
                      </Link>
                      <DropDown>
                        <ul>
                          <li className="menu-item-has-children">
                            <Link to="/">
                              Femail Fertility Test <IoIosArrowForward />
                            </Link>
                            <DropDown>
                              <ul>
                                <li>
                                  <Link to="/">Falliculor Monitoring</Link>
                                </li>
                                <li>
                                  <Link to="/home-v2">Tubal Patency Test</Link>
                                </li>
                                <li>
                                  <Link to="/home-v3">ERA</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Ovarion Reserve Testing
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    USG-Pelvic Scan/AFC/3D Scan
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Recurrent Miscarriages
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">Laporoscopy</Link>
                                </li>
                              </ul>
                            </DropDown>
                          </li>

                          <li className="menu-item-has-children">
                            <Link to="/">
                              Female Fertility Treatment
                              <IoIosArrowForward />
                            </Link>
                            <DropDown>
                              <ul>
                                <li>
                                  <Link to="/">IVF</Link>
                                </li>
                                <li>
                                  <Link to="/home-v2">IUI</Link>
                                </li>
                                <li>
                                  <Link to="/home-v3">ICSI</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">Ovulation Induction</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">Egg Freezing</Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Embryo Genetic Testing In Jabalpur
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Recurrent Miscarriages
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Platelet Rich Plasma Therapy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    3rd Party Reproduction & Gestational
                                    Surrogacy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">
                                    Recurrent IVF Failure
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/home-v4">Immunotherapy</Link>
                                </li>
                              </ul>
                            </DropDown>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link to="/home-v4">Hysteroscopy</Link>
                    </li>
                    <li>
                      <Link to="/home-v5">Laporoscapy</Link>
                    </li>
                  </ul>
                </DropDown>
              </li>

              <li className="menu-item-has-children">
                <Link to="/">Patient Guide</Link>
                <DropDown>
                  <ul>
                    <li>
                      <Link to="/"> Are You Want Solution </Link>
                    </li>
                    <li>
                      <Link to="/home-v2">Fertility Queries</Link>
                    </li>
                    <li>
                      <Link to="/home-v3">Blog</Link>
                    </li>
                    <li>
                      <Link to="/home-v4">Reviews</Link>
                    </li>
                  </ul>
                </DropDown>
              </li>

              <li className="menu-item-has-children">
                <Link to="/">Pages</Link>
                <DropDown>
                  <ul>
                    <li>
                      <Link to="/appointments">Appointments</Link>
                    </li>
                    <li>
                      <Link to="/departments">Departments</Link>
                    </li>
                    <li>
                      <Link to="/departments/department-details">
                        Department Details
                      </Link>
                    </li>
                    <li>
                      <Link to="/doctors">Doctors</Link>
                    </li>
                    <li>
                      <Link to="doctors/doctor-details">Doctor Details</Link>
                    </li>
                    <li>
                      <Link to="/pricing-plan">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/timetable">Timetable</Link>
                    </li>
                  </ul>
                </DropDown>
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
</header>; */
}

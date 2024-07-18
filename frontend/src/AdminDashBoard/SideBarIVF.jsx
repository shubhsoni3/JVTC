import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from 'sweetalert2';
import { FaBook } from "react-icons/fa";
import { FaPhoneSquareAlt, FaAddressCard } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { ImSwitch } from "react-icons/im";
import { clearUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
const Sider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to Logout?',
      text: 'You will be logged out of your account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout',
      cancelButtonText: 'No, Stay Logged In'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic for logout
        navigate("/");
        dispatch(clearUser());
      }
    });
  };
  return (
    <Wrapper>
      <div className="col-12">
        <div className="px-0" id="sidebar">
          <div className="d-flex align-items-center px-xl-3 px-2 pt-2">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item mt-5">
                <Link to="/Admin-Page-Career">
                  <div className=" mt-5  d-flex justify-content-center">
                    <FaBook className="fs-4 bi bi-house-door-fill " />
                  </div>{" "}
                  <div className="mt-2">
                    <h3 class="d-none d-sm-inline fs-6 text-light text-center">
                      Book Now
                    </h3>{" "}
                  </div>
                </Link>
              </li>

              <li className="nav-item mt-5">
                <Link to="/Admin-Page-Contact">
                  <div className="d-flex justify-content-center ">
                    <FaAddressCard className="fs-4 bi bi-house-door-fill" />
                  </div>{" "}
                  <div className="mt-1">
                    <h3 class="d-none d-sm-inline fs-6 text-light">
                      Contact Us
                    </h3>{" "}
                  </div>
                </Link>
              </li>

              <hr />
              <li className="nav-item mt-5">
                <Link to="/Admin-Page-UserSign">
                  <div className="d-flex justify-content-center">
                    <FaPhoneSquareAlt className="fs-4 bi bi-house-door-fill me-2" />
                  </div>{" "}
                  <div className="mt-1">
                    <h3 class="d-none d-sm-inline fs-6 text-light appo">
                      Appointment
                    </h3>{" "}
                  </div>
                </Link>
              </li>

              <hr />
              <li className="nav-item mt-5">
                <Link to="/PatintDetail">
                  <div className="d-flex justify-content-center">
                    <BiSolidUserDetail className="fs-4 bi bi-house-door-fill me-2" />
                  </div>{" "}
                  <div className="mt-1">
                    <h3 class="d-none d-sm-inline fs-6 text-light appo">
                      Patient Detail
                    </h3>{" "}
                  </div>
                </Link>
              </li>

              <li className="nav-item mt-4">
                <div onClick={handleLogout}>
                  <div className="d-flex justify-content-center">
                    <ImSwitch className="fs-4 bi bi-house-door-fill" />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn d-none d-sm-inline text-light mt-2 px-3 py-1"
                      style={{
                        backgroundColor: "#2ecc71",
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sider;
const Wrapper = styled.div`
  #sidebar {
    /* width: 12%; */
    height: 100vh;
    /* position: fixed; */
    background-color: teal;
    /* background-image: linear-gradient(270deg, #e12454 0%, #9d1976 100%); */

    @media screen and (max-width: 768px) {
      width: 3rem;
      height: 212rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      width: 5rem;
      height: 151rem;
    }
  }
  .bi {
    color: white;
  }

  .link-div {
    width: 150px;
  }
  a {
    text-decoration: none;
  }
  .appo {
    margin-left: -5px;
  }
`;

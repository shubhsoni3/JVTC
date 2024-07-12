import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {Button, Form } from "react-bootstrap";
import Lottie from "react-lottie";
import Sider from "./SideBarIVF";
// import animationData from "../../images/animation/loading-effect.json";

function SecurityAmount() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [securityList, setSecurityList] = useState([]);
  const [loadingEffect, setLoadingEffect] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [currentRows, setCurrentRows] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = securityList.filter(item =>
      item.Patient_Name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.Mobile_number.includes(e.target.value) ||
      item.Booking_Date.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getBookingData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/auth/booknowGet"
      );
      console.log(response.data.data);

      if (Array.isArray(response.data.data)) {
        setSecurityList(response.data.data);
        setFilteredData(response.data.data);
      } else {
        console.error("Received non-array data:", response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBookingData();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    
    setCurrentRows(filteredData.slice(startIndex, endIndex));
  }, [currentPage, rowsPerPage, filteredData]);

  return (
    <Wrapper>
      <div className="header">{/* <Header /> */}</div>

      <div className="row flex-nowrap">
        <div className="col-lg-1 col-1 " id="hd">
          <Sider />
        </div>
        <div className="col-lg-11 mt-2 set" id="set">
          <div className="text-center mt-4">
            <h3>Welcome To Jabalpur IVF Center </h3>
            <h3 className="fw-bold">Book Now Data</h3>
          </div>
          <div className="row">
            {/* Start Search by Patient */}
            <div className="col-lg-12" id="head">
              <nav className="shadow rounded navbar navbar-light bg-light">
                <h6 className="mx-3 my-1 my-md-0">Search By Patient</h6>
                <div className="container-fluid" id="cont">
                  <div className="navbar1">
                    <input
                      className="form-control me-2 rounded-5"
                      type="search"
                      placeholder="Enter Patient Name or Mobile or Id"
                      aria-label="Search"
                      onChange={handleSearch}
                      value={searchTerm}
                    />
                  </div>
                  <div>
                    <Form.Group
                      controlId="rowsPerPageSelect"
                      style={{ display: "flex" }}
                    >
                      <h6 className="d-flex align-items-center">
                        Rows Per Page:
                      </h6>
                      <Form.Control
                        as="select"
                        value={rowsPerPage}
                        className="m-2"
                        style={{ width: "auto" }}
                        onChange={handleRowsPerPageChange}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div>
                    <h5>Total Patients - {securityList?.length}</h5>
                  </div>
                </div>
              </nav>
            </div>
            {/* End Search by Patient */}

            <div className="col-lg-12">
              <div
                className="widget-area-2 proclinic-box-shadow mt-5"
                id="tableres"
              >
                {loadingEffect ? (
                  <Lottie
                    options={defaultOptions}
                    height={300}
                    width={400}
                    style={{ background: "transparent" }}
                  ></Lottie>
                ) : (
                  <table className="table table-bordered border-success shadow">
                    <thead className="table table-dark">
                      <tr>
                        <th>Name</th>
                        <th>Booking Date</th>
                        <th>Mobail Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows?.length === 0 ? (
                        <tr>
                          <td colSpan="6">
                            <div className="no-data-container">
                              <h4>No Data Found</h4>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        currentRows?.map((item, index) => (
                          <tr className="table-row" key={item.contact_id}>
                            <td>{item.Patient_Name}</td>
                            <td>{item.Booking_Date}</td>
                            <td>{item.Mobile_number}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
                <div className="container mt-3 mb-3">
                  <div className="row">
                    <div className="col-lg-10 col-xl-8 col-md-12 col-sm-12 col-8">
                      <h4
                        style={{
                          color: "black",
                          marginLeft: "5px",
                          marginRight: "5px",
                          fontSize: "1.1rem",
                        }}
                      >
                        {searchTerm ? (
                          <>
                            Showing Page {currentPage} of
                            {Math.ceil(filteredData.length / rowsPerPage)} from{" "}
                            {filteredData?.length} entries (filtered from{" "}
                            {securityList?.length} total entries)
                          </>
                        ) : (
                          <>
                            Showing Page {currentPage} of
                            {Math.ceil(securityList.length / rowsPerPage)} from{" "}
                            {securityList?.length} entries
                          </>
                        )}
                      </h4>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="d-flex justify-content-evenly">
                        <Button
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          variant="warning"
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={
                            searchTerm
                              ? currentPage ===
                                Math.ceil(filteredData.length / rowsPerPage)
                              : currentPage ===
                                Math.ceil(securityList.length / rowsPerPage)
                          }
                          variant="success"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SecurityAmount;

const Wrapper = styled.div`
  // Add your styled-components CSS here
  .margin {
    margin-left: 90px;
  }
  th {
    background-color: #f8f9fa;
    /* color: aliceblue; */
  }
  .set {
    margin-left: -10px;
  }
  th {
    background-color: teal;
    color: #f8f9fa;
  }
`;

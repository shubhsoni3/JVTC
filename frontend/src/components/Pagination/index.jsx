import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;

    // Conditionally show the first page or a disabled first page button
    if (currentPage <= maxVisiblePages) {
      pageNumbers.push(
        <li key={1}>
          <button
            className={`cs_pagination_item cs_center ${
              currentPage === 1 ? "active" : ""
            }`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
        </li>
      );
    } else {
      pageNumbers.push(
        <li key={1}>
          <button className="cs_pagination_item cs_center" disabled>
            1
          </button>
        </li>
      );
    }

    // Show dots if necessary
    if (currentPage > maxVisiblePages + 1) {
      pageNumbers.push(
        <li key="start-dots">
          <span className="cs_pagination_item cs_center">...</span>
        </li>
      );
    }

    const startPage = currentPage <= maxVisiblePages ? 2 : currentPage - 1;
    const endPage =
      currentPage < totalPages - 1 ? currentPage + 1 : totalPages - 1;

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            className={`cs_pagination_item cs_center ${
              currentPage === i ? "active" : ""
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    // Show dots if necessary
    if (currentPage < totalPages - maxVisiblePages) {
      pageNumbers.push(
        <li key="end-dots">
          <span className="cs_pagination_item cs_center">...</span>
        </li>
      );
    }

    // Always show the last page
    pageNumbers.push(
      <li key={totalPages}>
        <button
          className={`cs_pagination_item cs_center ${
            currentPage === totalPages ? "active" : ""
          }`}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      </li>
    );

    return pageNumbers;
  };

  return (
    <ul className="cs_pagination_box">
      <li>
        <button
          className="cs_pagination_arrow cs_center"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src="images/icons/left_arrow_blue.svg" alt="Icon" />
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          className="cs_pagination_arrow cs_center"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src="images/icons/right_arrow_blue.svg" alt="Icon" />
        </button>
      </li>
    </ul>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8; // Set the total number of pages as needed

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add logic here to fetch or display data for the selected page
  };

  return (
    <div>
      <h1>Page {currentPage}</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;

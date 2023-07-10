import React from "react";
import PropTypes from "prop-types";
import style from "./Pagination.module.css";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ resultsPerPage, totalResults, currentPage, paginate }) => {
  const pageNumbers = [];
  const maxPageButtons = 3; // Número máximo de botones de página a mostrar

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  const getDisplayedPageNumbers = () => {
    // Obtener el rango de botones de página a mostrar
    const start = Math.max(1, currentPage - maxPageButtons);
    const end = Math.min(pageNumbers.length, currentPage + maxPageButtons);

    return pageNumbers.slice(start - 1, end);
  };

  return (
    <div className={style.pagination}>
      {currentPage > 1 && (
        <button className={style.pageNumber} onClick={handlePreviousPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {getDisplayedPageNumbers().map((number) => (
        <button
          key={number}
          className={`${style.pageNumber} ${currentPage === number ? style.active : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
      {currentPage < pageNumbers.length && (
        <button className={style.pageNumber} onClick={handleNextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  resultsPerPage: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;

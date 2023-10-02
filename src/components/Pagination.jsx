import React from 'react';

import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <span className="arrow-icon">←</span>
      </button>
      {pageNumbers.slice(0, 10).map((pageNumber) => (
        <button key={pageNumber} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
       <span className="arrow-icon">→</span>
      </button>
    </div>
  );
};

export default Pagination;


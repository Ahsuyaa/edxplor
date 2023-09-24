import React from "react";
import styles from "./pagination.module.scss"; // Import the Sass styles
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  
  const renderPageIndex = () => {
    const pageIndex = [];
  
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageIndex.push(
          <div
            key={i}
            className={`${styles.pageNumber} ${currentPage === i ? styles.active : ""}`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </div>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageIndex.push(
            <div
              key={i}
              className={`${styles.pageNumber} ${currentPage === i ? styles.active : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </div>
          );
        }
        pageIndex.push(
          <div key="ellipsis" className={styles.ellipsis}>
            ...
          </div>
        );
        pageIndex.push(
          <div
            key={totalPages}
            className={`${styles.pageNumber} ${currentPage === totalPages ? styles.active : ""}`}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </div>
        );
      } else if (currentPage >= totalPages - 2) {
        pageIndex.push(
          <div
            key={1}
            className={`${styles.pageNumber} ${currentPage === 1 ? styles.active : ""}`}
            onClick={() => handlePageClick(1)}
          >
            1
          </div>
        );
        pageIndex.push(
          <div key="ellipsis" className={styles.ellipsis}>
            ...
          </div>
        );
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageIndex.push(
            <div
              key={i}
              className={`${styles.pageNumber} ${currentPage === i ? styles.active : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </div>
          );
        }
      } else {
        pageIndex.push(
          <div
            key={1}
            className={`${styles.pageNumber} ${currentPage === 1 ? styles.active : ""}`}
            onClick={() => handlePageClick(1)}
          >
            1
          </div>
        );
        pageIndex.push(
          <div key="ellipsisStart" className={styles.ellipsis}>
            ...
          </div>
        );
  
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageIndex.push(
            <div
              key={i}
              className={`${styles.pageNumber} ${currentPage === i ? styles.active : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </div>
          );
        }
  
        pageIndex.push(
          <div key="ellipsisEnd" className={styles.ellipsis}>
            ...
          </div>
        );
  
        pageIndex.push(
          <div
            key={totalPages}
            className={`${styles.pageNumber} ${currentPage === totalPages ? styles.active : ""}`}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </div>
        );
      }
    }
  
    return pageIndex;
  };
  

  return (
    <div className={styles.pagination}>
      <button className={styles.arrowButton} onClick={handlePrevPage}>
        <IoIosArrowBack />
      </button>
      {renderPageIndex()}
      <button className={styles.arrowButton} onClick={handleNextPage}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;

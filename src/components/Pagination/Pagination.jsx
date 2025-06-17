import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/context";

import s from "./Pagination.module.scss";
import PaginationItem from "../ui/PaginationItem";

const Pagination = () => {
  const { radioValue, totalPages, currentPage, searchText, goToPage } = useContext(MovieContext);
  const [paginationStep, setPaginationStep] = useState(1);
  const pageLimit = 10;

  useEffect(() => {
    setPaginationStep(1);
    goToPage(1);
  }, [radioValue, searchText]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      goToPage(newPage);

      if (newPage >= paginationStep + pageLimit) {
        setPaginationStep(paginationStep + 1);
      }
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      goToPage(newPage);

      if (newPage < paginationStep) {
        setPaginationStep(paginationStep - 1);
      }
    }
  };

  const goToFirstPage = () => {
    setPaginationStep(1);
    goToPage(1);
  };

  const goToLastPage = () => {
    totalPages <= pageLimit ? setPaginationStep(1) : setPaginationStep(totalPages - pageLimit + 1);
    goToPage(totalPages);
  };

  const renderPages = () => {
    const pages = [];
    const end = Math.min(paginationStep + pageLimit - 1, totalPages);
    for (let i = paginationStep; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = renderPages();

  return (
    <ul className={s.paginationList}>
      <PaginationItem nav onClick={goToFirstPage} disabled={currentPage === 1}>
        {"<<"}
      </PaginationItem>
      <PaginationItem nav onClick={goToPrevPage} disabled={currentPage === 1}>
        {"<"}
      </PaginationItem>

      {pages.map((page) => (
        <PaginationItem key={page} currentPage={currentPage} page={page} onClick={() => goToPage(page)}>
          {page}
        </PaginationItem>
      ))}

      <PaginationItem nav onClick={goToNextPage} disabled={currentPage === totalPages}>
        {">"}
      </PaginationItem>
      <PaginationItem nav onClick={goToLastPage} disabled={currentPage === totalPages}>
        {">>"}
      </PaginationItem>
    </ul>
  );
};

export default Pagination;

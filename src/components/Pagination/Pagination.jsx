import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/context";

import s from "./Pagination.module.scss";
import PaginationItem from "../ui/PaginationItem/PaginationItem";

const Pagination = () => {
  const { totalPages, currentPage, goToPage, paginationStep } = useContext(MovieContext);

  const pageLimit = 10;

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
      <PaginationItem nav onClick={() => goToPage(1)} disabled={currentPage === 1}>
        {"<<"}
      </PaginationItem>
      <PaginationItem nav onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </PaginationItem>

      {pages.map((page) => (
        <PaginationItem
          key={page}
          currentPage={currentPage}
          page={page}
          disabled={currentPage === page}
          onClick={() => {
            goToPage(page);
          }}
        >
          {page}
        </PaginationItem>
      ))}

      <PaginationItem nav onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </PaginationItem>
      <PaginationItem nav onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
        {">>"}
      </PaginationItem>
    </ul>
  );
};

export default Pagination;

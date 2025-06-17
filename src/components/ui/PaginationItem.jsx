import styles from "./PaginationItem.module.scss";

const PaginationItem = (props) => {
  const { onClick, disabled, children, currentPage, page, nav } = props;
  const { paginationItem, paginationNav, paginationLink, paginationLinkActive } = styles;

  const isActive = currentPage === page;
  const isNav = nav;

  return (
    <li className={paginationItem}>
      <button className={`${isNav ? paginationNav : paginationLink} ${isActive ? paginationLinkActive : ""}`} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default PaginationItem;

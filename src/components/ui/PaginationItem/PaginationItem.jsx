import s from "./PaginationItem.module.scss";

const PaginationItem = (props) => {
  const { onClick, disabled, children, currentPage, page, nav } = props;

  const isActive = currentPage === page;
  const isNav = nav;

  return (
    <li className={s.paginationItem}>
      <button className={`${isNav ? s.paginationNav : s.paginationLink} ${isActive ? s.paginationLinkActive : ""}`} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default PaginationItem;

import styles from "./Header.module.scss";

const Header = () => {
  const { header, title, link, wrapper } = styles;

  return (
    <header className={header}>
      <div className="container">
        <div className={wrapper}>
          <h1 className={title}>React Movies</h1>
          <a className={link} href="#">
            Repo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

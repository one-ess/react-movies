import styles from "./Preloader.module.scss";

const Preloader = () => {
  const { preloader } = styles;
  return <div className={preloader}></div>;
};

export default Preloader;

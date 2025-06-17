import styles from "./MovieItem.module.scss";

const MovieItem = (props) => {
  const { Year, Type, Title, Poster } = props;
  const { movieItem, movieImg, movieContent, movieContentWrapper, movieTitle, movieYear, movieCategory } = styles;

  const placeholder = "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";

  return (
    <li className={movieItem}>
      <img className={movieImg} src={Poster === "N/A" ? placeholder : Poster} alt={Title} onError={(e) => (e.target.src = placeholder)} />
      <div className={movieContent}>
        <div className={movieContentWrapper}>
          <h2 className={movieTitle}>{Title}</h2>
          <span className={movieYear}>{Year}</span>
          <span className={movieCategory}>{Type}</span>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;

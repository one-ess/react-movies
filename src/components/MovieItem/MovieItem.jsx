import s from "./MovieItem.module.scss";

const MovieItem = (props) => {
  const { Year, Type, Title, Poster } = props;

  const placeholder = "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";

  return (
    <li className={s.movieItem}>
      <img className={s.movieImg} src={Poster === "N/A" ? placeholder : Poster} alt={Title} onError={(e) => (e.target.src = placeholder)} />
      <div className={s.movieContent}>
        <div className={s.movieContentWrapper}>
          <h2 className={s.movieTitle}>{Title}</h2>
          <span className={s.movieYear}>{Year}</span>
          <span className={s.movieCategory}>{Type}</span>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;

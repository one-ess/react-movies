const Movie = (props) => {
  const { Title, Year, Type, Poster } = props;
  return (
    <li className="movie__item">
      {Poster === "N/A" ? <div>No Image</div> : <img className="movie__img" src={Poster} alt={Title} />}

      <h3 className="movie__title">{Title}</h3>
      <p className="movie__year">{Year}</p>
      <p className="movie__type">{Type}</p>
    </li>
  );
};

export default Movie;

import Movie from "./Movie";

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <ul className="movies__list">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </ul>
  );
};

export default Movies;

import { useContext } from "react";
import MovieItem from "../MovieItem/MovieItem";
import Preloader from "../ui/Preloader";
import styles from "./MoviesList.module.scss";

import { MovieContext } from "../../context/context";

const MoviesList = () => {
  const { movies, loading } = useContext(MovieContext);
  const { movieList } = styles;

  return <ul className={movieList}>{loading ? <Preloader /> : movies.length > 0 ? movies.map((movie) => <MovieItem key={movie.imdbID} {...movie} />) : <div>Ничего не найдено</div>}</ul>;
};

export default MoviesList;

import { useContext } from "react";

import MovieItem from "../MovieItem/MovieItem";
import Preloader from "../ui/Preloader/Preloader";

import s from "./MoviesList.module.scss";

import { MovieContext } from "../../context/context";

const MoviesList = () => {
  const { movies, isLoading } = useContext(MovieContext);

  return <ul className={s.movieList}>{isLoading ? <Preloader /> : movies.length > 0 ? movies.map((movie) => <MovieItem key={movie.imdbID} {...movie} />) : <div>Ничего не найдено</div>}</ul>;
};

export default MoviesList;

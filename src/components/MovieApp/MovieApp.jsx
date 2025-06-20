import { useContext, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

import { MovieContext } from "../../context/context";

import Search from "../Search/Search";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const MovieApp = () => {
  const { searchText, radioValue, currentPage, handleOMDBResponse, setLoading } = useContext(MovieContext);
  const debouncedSearchText = useDebounce(searchText, 600);

  useEffect(() => {
    if (!debouncedSearchText) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://www.omdbapi.com/?s=${debouncedSearchText}&type=${radioValue}&page=${currentPage}&apikey=${API_KEY}`);

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        handleOMDBResponse(data);
      } catch (error) {
        console.error("Ошибка:", error.message);
      }
    };

    fetchData();
  }, [debouncedSearchText, radioValue, currentPage]);

  return (
    <>
      <Search />
      <Pagination />
      <MoviesList />
    </>
  );
};

export default MovieApp;

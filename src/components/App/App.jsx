import { useContext, useEffect } from "react";

import MainLayout from "../../layout/MainLayout";
import Search from "../Search/Search";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";
import { MovieContext } from "../../context/context";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const { searchText, radioValue, currentPage, dispatch } = useContext(MovieContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText}&type=${radioValue}&page=${currentPage}&apikey=${API_KEY}`);

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === "False") {
          dispatch({ type: "SET_MOVIES", payload: [] });
          dispatch({ type: "SET_TOTAL_PAGES", payload: 1 });
        } else {
          dispatch({ type: "SET_MOVIES", payload: data.Search });
          dispatch({ type: "SET_TOTAL_PAGES", payload: Math.ceil(Number(data.totalResults) / 10) });
        }
      } catch (error) {
        console.error("Ошибка:", error.message);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, [searchText, radioValue, currentPage]);

  return (
    <MainLayout>
      <Search />
      <Pagination />
      <MoviesList />
    </MainLayout>
  );
};

export default App;

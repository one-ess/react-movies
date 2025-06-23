import { useContext, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { MovieContext } from "../../context/context";
import Search from "../Search/Search";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";
import MainLayout from "../../layout/MainLayout";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const { text, type, currentPage, handleOMDBResponse, setLoading } = useContext(MovieContext);

  const debouncedText = useDebounce(text, 600);

  useEffect(() => {
    if (!debouncedText) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://www.omdbapi.com/?s=${debouncedText}&type=${type}&page=${currentPage}&apikey=${API_KEY}`);

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        handleOMDBResponse(data);
      } catch (error) {
        console.error("Ошибка:", error.message);
      }
    };

    fetchData();
  }, [debouncedText, type, currentPage]);

  return (
    <MainLayout>
      <Search />
      <Pagination />
      <MoviesList />
    </MainLayout>
  );
};

export default App;

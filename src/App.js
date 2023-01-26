import { useState } from "react";
import { useEffect } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import "./scss/App.scss";
import { API_KEY } from "./helpers/API_KEY";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App wrapper">
      <header className="header">React Movies</header>
      <main className="page">
        <div className="container">
          <Search setMovies={setMovies} setLoading={setLoading} />
          {loading ? <h3>Loading...</h3> : <Movies movies={movies} />}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;

import { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../helpers/API_KEY";

const Search = (props) => {
  const { setMovies, setLoading } = props;
  const [inputValue, setInputValue] = useState("");
  const [inputRadio, setInputRadio] = useState("");

  useEffect(() => {
    if (inputValue.length > 0) {
      setLoading(true);
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}&type=${inputRadio}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.Search);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [inputValue, inputRadio, setMovies, setLoading]);

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form__input"
        placeholder="Search a movie..."
        type="search"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className="radio__list">
        <label>
          <input
            data-radio=""
            type="radio"
            name="radio"
            checked={inputRadio === "" ? true : false}
            onChange={(e) => {
              setInputRadio(e.target.dataset.radio);
            }}
          />
          All
        </label>
        <label>
          <input
            data-radio="movie"
            type="radio"
            name="radio"
            checked={inputRadio === "movie" ? true : false}
            onChange={(e) => {
              setInputRadio(e.target.dataset.radio);
            }}
          />
          Movies
        </label>
        <label>
          <input
            data-radio="series"
            type="radio"
            name="radio"
            checked={inputRadio === "series" ? true : false}
            onChange={(e) => {
              setInputRadio(e.target.dataset.radio);
            }}
          />
          Series
        </label>
      </div>
    </form>
  );
};

export default Search;

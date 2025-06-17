import { useContext } from "react";
import styles from "./Search.module.scss";
import { MovieContext } from "../../context/context";

const Search = () => {
  const { form, searchInput, radioLabel, radioInput, radioWrapper, searchWrapper } = styles;
  const { radioValue, dispatch } = useContext(MovieContext);

  const changeText = (e) => {
    if (e.target.value.trim()) {
      dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value.trim() });
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
    }
  };

  const changeRadio = (e) => {
    dispatch({ type: "SET_RADIO_VALUE", payload: e.target.value });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  };

  return (
    <form className={form} onSubmit={(e) => e.preventDefault()}>
      <fieldset className={searchWrapper}>
        <input className={searchInput} type="text" placeholder="John Wick" onChange={(e) => changeText(e)} />
      </fieldset>
      <fieldset className={radioWrapper}>
        <label className={radioLabel}>
          <input className={radioInput} type="radio" name="category" value="" checked={radioValue === ""} onChange={(e) => changeRadio(e)} />
          Все
        </label>
        <label className={radioLabel}>
          <input className={radioInput} type="radio" name="category" value="movie" checked={radioValue === "movie"} onChange={(e) => changeRadio(e)} />
          Фильмы
        </label>
        <label className={radioLabel}>
          <input className={radioInput} type="radio" name="category" value="series" checked={radioValue === "series"} onChange={(e) => changeRadio(e)} />
          Сериалы
        </label>
        <label className={radioLabel}>
          <input className={radioInput} type="radio" name="category" value="game" checked={radioValue === "game"} onChange={(e) => changeRadio(e)} />
          Игры
        </label>
      </fieldset>
    </form>
  );
};

export default Search;

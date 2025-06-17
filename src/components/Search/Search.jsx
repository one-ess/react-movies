import { useContext } from "react";
import { MovieContext } from "../../context/context";

import s from "./Search.module.scss";

const Search = () => {
  const { radioValue, changeText, changeRadio } = useContext(MovieContext);

  return (
    <form className={s.form} onSubmit={(e) => e.preventDefault()}>
      <fieldset className={s.searchWrapper}>
        <input className={s.searchInput} type="text" placeholder="John Wick" onChange={(e) => changeText(e)} />
      </fieldset>
      <fieldset className={s.radioWrapper}>
        <label className={s.radioLabel}>
          <input className={s.radioInput} type="radio" name="category" value="" checked={radioValue === ""} onChange={(e) => changeRadio(e)} />
          Все
        </label>
        <label className={s.radioLabel}>
          <input className={s.radioInput} type="radio" name="category" value="movie" checked={radioValue === "movie"} onChange={(e) => changeRadio(e)} />
          Фильмы
        </label>
        <label className={s.radioLabel}>
          <input className={s.radioInput} type="radio" name="category" value="series" checked={radioValue === "series"} onChange={(e) => changeRadio(e)} />
          Сериалы
        </label>
        <label className={s.radioLabel}>
          <input className={s.radioInput} type="radio" name="category" value="game" checked={radioValue === "game"} onChange={(e) => changeRadio(e)} />
          Игры
        </label>
      </fieldset>
    </form>
  );
};

export default Search;

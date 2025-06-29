import { useContext } from "react";
import { MovieContext } from "../../context/context";

import s from "./Search.module.scss";

const Search = () => {
  const { type, handleTextChange, handleRadioChange } = useContext(MovieContext);

  return (
    <form className={s.form} onSubmit={(e) => e.preventDefault()}>
      <fieldset className={s.searchWrapper}>
        <input
          className={s.searchInput}
          type="text"
          placeholder="John Wick"
          onChange={(e) => {
            handleTextChange(e);
          }}
        />
      </fieldset>
      <fieldset className={s.radioWrapper}>
        <label className={s.radioLabel}>
          <input
            className={s.radioInput}
            type="radio"
            name="category"
            value=""
            checked={type === ""}
            onChange={(e) => {
              handleRadioChange(e);
            }}
          />
          Все
        </label>
        <label className={s.radioLabel}>
          <input
            className={s.radioInput}
            type="radio"
            name="category"
            value="movie"
            checked={type === "movie"}
            onChange={(e) => {
              handleRadioChange(e);
            }}
          />
          Фильмы
        </label>
        <label className={s.radioLabel}>
          <input
            className={s.radioInput}
            type="radio"
            name="category"
            value="series"
            checked={type === "series"}
            onChange={(e) => {
              handleRadioChange(e);
            }}
          />
          Сериалы
        </label>
        <label className={s.radioLabel}>
          <input
            className={s.radioInput}
            type="radio"
            name="category"
            value="game"
            checked={type === "game"}
            onChange={(e) => {
              handleRadioChange(e);
            }}
          />
          Игры
        </label>
      </fieldset>
    </form>
  );
};

export default Search;

import { createContext, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import reducer from "./reducer";

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialState = {
    movies: [],
    loading: true,
    searchText: searchParams.get("text") || "John Wick",
    radioValue: searchParams.get("type") || "",
    currentPage: Number(searchParams.get("page")) || 1,
    paginationStep: Number(searchParams.get("step")) || 1,
    totalPages: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    handleOMDBResponse: (data) => {
      const movies = data.Response === "True" ? data.Search : [];
      const totalPages = data.Response === "True" ? Math.ceil(Number(data.totalResults) / 10) : 1;

      dispatch({ type: "HANDLE_OMDB_RESPONSE", payload: { movies, totalPages } });
    },

    setLoading: (isLoading) => {
      dispatch({ type: "SET_LOADING", payload: isLoading });
    },

    handleTextChange: (e) => {
      const value = e.target.value.trim();
      dispatch({ type: "HANDLE_TEXT_CHANGE", payload: value });
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", 1);
        params.set("step", 1);
        params.set("type", "");
        params.set("text", value);
        return params;
      });
    },

    handleRadioChange: (e) => {
      const value = e.target.value;
      dispatch({ type: "HANDLE_RADIO_CHANGE", payload: value });
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", 1);
        params.set("step", 1);
        params.set("type", value);
        return params;
      });
    },

    goToPage: (page) => {
      const newPage = Math.max(1, Math.min(page, state.totalPages));
      const newStep = Math.floor((page - 1) / 10) * 10 + 1;

      dispatch({ type: "GO_TO_PAGE", payload: { newPage, newStep } });

      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", newPage);
        params.set("step", newStep);
        return params;
      });
    },
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

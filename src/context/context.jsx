import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const MovieContext = createContext();

const initialState = {
  movies: [],
  loading: false,
  searchText: "John Wick",
  radioValue: "",
  currentPage: 1,
  totalPages: 1,
};

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    dispatch,
    handleOMDBResponse: (data) => {
      dispatch({ type: "HANDLE_OMDB_RESPONSE", payload: data });
    },
    setLoading: (isLoading) => {
      dispatch({ type: "SET_LOADING", payload: isLoading });
    },
    changeText: (text) => {
      dispatch({ type: "CHANGE_TEXT", payload: text });
    },
    changeRadio: (value) => {
      dispatch({ type: "CHANGE_RADIO", payload: value });
    },
    goToPage: (page) => {
      dispatch({ type: "GO_TO_PAGE", payload: page });
    },
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

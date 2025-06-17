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

  state.dispatch = dispatch;

  return <MovieContext.Provider value={state}>{children}</MovieContext.Provider>;
};

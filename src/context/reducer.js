const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_RADIO_VALUE":
      return {
        ...state,
        radioValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

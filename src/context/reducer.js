const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "HANDLE_OMDB_RESPONSE":
      return {
        ...state,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case "HANDLE_TEXT_CHANGE":
      return {
        ...state,
        searchText: action.payload,
        currentPage: 1,
        paginationStep: 1,
        radioValue: "",
      };
    case "HANDLE_RADIO_CHANGE":
      return {
        ...state,
        radioValue: action.payload,
        currentPage: 1,
        paginationStep: 1,
      };

    case "GO_TO_PAGE":
      return {
        ...state,
        currentPage: action.payload.newPage,
        paginationStep: action.payload.newStep,
      };
    default:
      return state;
  }
};

export default reducer;

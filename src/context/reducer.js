const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "HANDLE_OMDB_RESPONSE":
      return {
        ...state,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
        isLoading: false,
      };
    case "HANDLE_TEXT_CHANGE":
      return {
        ...state,
        text: action.payload,
        currentPage: 1,
        paginationStep: 1,
        type: "",
      };
    case "HANDLE_RADIO_CHANGE":
      return {
        ...state,
        type: action.payload,
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

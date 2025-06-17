const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "CHANGE_TEXT": {
      const trimmedValue = action.payload.target.value.trim();

      if (trimmedValue) {
        return {
          ...state,
          searchText: trimmedValue,
          currentPage: 1,
        };
      } else {
        return state;
      }
    }
    case "CHANGE_RADIO":
      return {
        ...state,
        radioValue: action.payload.target.value,
        currentPage: 1,
      };
    case "HANDLE_OMDB_RESPONSE":
      if (action.payload.Response === "False") {
        return {
          ...state,
          movies: [],
          totalPages: 1,
        };
      } else {
        return {
          ...state,
          movies: action.payload.Search,
          totalPages: Math.ceil(Number(action.payload.totalResults) / 10),
        };
      }
    case "GO_TO_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

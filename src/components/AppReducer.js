export default (state, action) => {
  switch (action.type) {
    case "ADD_CHARACTER_TO_BOOKMARKED":
      return {
        ...state,
        bookmarks: [action.payload, ...state.bookmarks],
      };
    case "REMOVE_CHARACTER_FROM_BOOKMARKED":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmarks) => bookmarks.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

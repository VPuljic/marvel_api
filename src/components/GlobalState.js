import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initalState = {
  bookmarks: localStorage.getItem("bookmarks")
    ? JSON.parse(localStorage.getItem("bookmarks"))
    : [],
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
  }, [state]);

  const addCharacterToBookmarked = (item) => {
    dispatch({ type: "ADD_CHARACTER_TO_BOOKMARKED", payload: item });
  };

  const removeCharacterFromBookmarked = (item) => {
    dispatch({ type: "REMOVE_CHARACTER_FROM_BOOKMARKED", payload: item });
  };

  return (
    <GlobalContext.Provider
      value={{
        bookmarks: state.bookmarks,
        addCharacterToBookmarked,
        removeCharacterFromBookmarked,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

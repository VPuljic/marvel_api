import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import CharacterItem from "./CharacterItem";

const CharacterBookmarked = () => {
  const { bookmarks } = useContext(GlobalContext);

  return (
    <section className="cards">
      {bookmarks.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};
export default CharacterBookmarked;

import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <p>...loading</p>
  ) : (
    <section className="cards">
      {characters.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;

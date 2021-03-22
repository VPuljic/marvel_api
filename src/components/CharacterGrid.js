import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ currentCharacters, isLoading }) => {
  return isLoading ? (
    <p>...loading</p>
  ) : (
    <section className="cards">
      {currentCharacters.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;

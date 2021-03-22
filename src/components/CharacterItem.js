import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const CharacterItem = ({ item }) => {
  const { addCharacterToBookmarked, bookmarks } = useContext(GlobalContext);
  const { removeCharacterFromBookmarked } = useContext(GlobalContext);

  let storedCharacter = bookmarks.find((o) => o.id === item.id);
  const bookmarksDisabled = storedCharacter ? true : false;
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={
              item.thumbnail.path +
              "/portrait_xlarge." +
              item.thumbnail.extension
            }
            alt=""
          />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Comics:</strong> {item.comics.available}
            </li>
          </ul>
          <button
            className="btn"
            disabled={bookmarksDisabled}
            onClick={() => addCharacterToBookmarked(item)}
          >
            Add to bookmark
          </button>
          <button
            className="btn"
            disabled={!bookmarksDisabled}
            onClick={() => removeCharacterFromBookmarked(item.id)}
          >
            Remove from bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;

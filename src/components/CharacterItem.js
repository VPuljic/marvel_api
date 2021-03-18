import React from "react";

const CharacterItem = ({
  item: {
    name,
    thumbnail: { path, extension },
    comics: { available },
  },
}) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={path + "/portrait_xlarge." + extension} alt="" />
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Comics:</strong> {available}
            </li>
            <li>
              <strong>Bookmarked:</strong> {"Yes / No"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;

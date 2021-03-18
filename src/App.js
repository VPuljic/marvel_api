import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import "./style.css";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const {
        data: {
          data: { results },
        },
      } = await axios(
        `http://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=bea7f2414fe2190b22d65860710623af&hash=6985192a5721a982dcf859dcd87a2623`
      );
      setCharacters(results);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default App;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import "./style.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

import { GlobalProvider } from "./components/GlobalState";
import CharacterBookmarked from "./components/CharacterBookmarked";

import md5 from "md5";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const timeStamp = Date.now();
  const publicKey = `YOUR_PUBLIC_KEY`;
  const privateKey = `YOUR_PRIVATE_KEY`;
  const hash = md5(timeStamp + privateKey + publicKey);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const {
        data: {
          data: { results },
        },
      } = await axios(
        `http://gateway.marvel.com/v1/public/characters?name=${query}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
      );
      setCharacters(results);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCharacters = characters.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid
          isLoading={isLoading}
          currentCharacters={currentCharacters}
        />
        <br />
        <CharacterBookmarked />
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={characters.length}
          paginate={paginate}
        />
      </div>
    </GlobalProvider>
  );
};

export default App;

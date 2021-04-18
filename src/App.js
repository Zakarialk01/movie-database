import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import error from "./error.jpg";

const API_KEY =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc5286ba52149f2876265ea55731dddd";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=cc5286ba52149f2876265ea55731dddd&query=";
function App() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const getMovies = async () => {
    const response = await fetch(API_KEY);
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search) {
      const response = await fetch(API_SEARCH + search);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    }
    setSearch("");
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="header">
        <header>Movie Database 🎥</header>
        <div className="search-form ">
          <form onSubmit={handleSubmit}>
            <input
              className="search-bar"
              placeholder="search for a movie"
              type="text"
              value={search}
              onChange={handleInput}
            />
            <button className="search-button" type="submit">
              <i class="fa fa-search"></i>{" "}
            </button>
          </form>
        </div>
      </div>
      {movies === undefined ||
        (movies.length == 0 && (
          <div className="robot">
            <h3>Not found sorry !</h3>
            <img src={error} />
          </div>
        ))}
      <div className="card-movie">
        {movies.length &&
          movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </div>
      {!movies === undefined ||
        (movies.length !== 0 && (
          <div id="footer">
            <p>© Copyright 2021. LOUKILIZAKARIA All Rights Reserved. </p>
          </div>
        ))}
    </div>
  );
}

export default App;

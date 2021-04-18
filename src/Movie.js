import React from "react";

const API_IMAGE = "https://image.tmdb.org/t/p/original";

const Movie = ({ title, key, poster_path, vote_average, overview }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 7) {
      return "yellow";
    }

    if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie" key={key}>
      <img src={API_IMAGE + poster_path} alt="Image not available" />
      <div className="movie-info">
        <h3>{title}</h3>

        <span className={`tag  ${setVoteClass(vote_average)}   `}>
          {vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <h2>overview</h2>
        <p>{overview}</p>{" "}
      </div>
    </div>
  );
};

export default Movie;

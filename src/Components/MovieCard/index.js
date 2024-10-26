import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { details } = props;
  const navigate = useNavigate();
  const title = details?.title || details.title;
  const rating = details?.vote_average || details.vote_average;
  const image = details?.poster_path || details.poster_path;

  const ClickMovieBtn = () => {
    navigate(`/onemovie/${details.id}`);
  };

  return (
    <button
      className="btn-card"
      onClick={ClickMovieBtn}
      value={details.id}
      type="button"
    >
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={details.id}
          className="movieposter"
        />
        <p>{title}</p>
        <span>Rating: {rating}</span>
      </div>
    </button>
  );
};

export default MovieCard;

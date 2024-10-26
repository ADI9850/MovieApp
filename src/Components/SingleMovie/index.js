import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./index.css";
import axios from "axios";
import Cast from "../Cast";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const [movieOne, setMovieOne] = useState([]);
  const key = "c45a857c193f6302f2b5061c3b85e743&language";
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        console.log(response.data, "io");
        setMovieOne(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="single-movie">
      <NavBar />
      <div className="singlemovie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieOne.backdrop_path}`}
          height="100px"
          width=""
          className="bg-image"
          alt={movieOne.id}
        />
        <div className="d-flex a-center">
          <div className="img-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieOne.poster_path}`}
              height="100px"
              width=""
              className="movie-title"
              alt={movieOne.id}
            />
          </div>
          <div>
            <h2>{movieOne.original_title}</h2>
            <h4>Rating: {movieOne.vote_average}</h4>
            <p>
              {movieOne.runtime} min &nbsp; {movieOne.tagline}
            </p>
            <p>releasing Data: {movieOne.release_date}</p>
          </div>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <p>{movieOne.overview}</p>
        </div>
      </div>
      <div className="">
        <Cast id={id} />
      </div>
    </div>
  );
};
export default SingleMovie;

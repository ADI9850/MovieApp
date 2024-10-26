import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const key = "c45a857c193f6302f2b5061c3b85e743";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-U`
      )
      .then((response) => {
        console.log(response.data.cast, "p");
        setCast(response.data.cast);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="cast">
      <h2>Cast</h2>
      <div className="cast-card">
        {cast.map((each, index) => {
          return (
            <div className="cart">
              {each.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${each.profile_path}`}
                  alt={each.id}
                  className="movieposter"
                />
              ) : (
                <div className="movieposter" />
              )}
              <p>Name:{each.original_name}</p>
              <span>Character: {each.character}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cast;

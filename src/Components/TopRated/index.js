import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import "./index.css";
import NavBar from "../NavBar";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
      )
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = topRated.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next" && prevPage * moviesPerPage < topRated.length) {
        return prevPage + 1;
      }
      if (direction === "prev" && prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  return (
    <div className="topRate">
      <NavBar />
      <div className="movie-list">
        {currentMovies.map((each, index) => (
          <MovieCard key={index} details={each} />
        ))}
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="page-numbers">
          {[...Array(Math.ceil(topRated.length / moviesPerPage)).keys()].map(
            (page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                className={currentPage === page + 1 ? "active" : ""}
              >
                {page + 1}
              </button>
            )
          )}
        </div>
        <button
          onClick={() => handlePageChange("next")}
          disabled={indexOfLastMovie >= topRated.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopRated;

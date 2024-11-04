import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of cast members to display per page
  const key = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Calculate the current cast items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cast.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(cast.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="cast">
      <h2>Cast</h2>
      <div className="cast-card">
        {currentItems.map((each) => (
          <div className="cart" key={each.id}>
            {each.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${each.profile_path}`}
                alt={each.original_name}
                className="movieposter"
              />
            ) : (
              <div className="movieposter" />
            )}
            <p>Name: {each.original_name}</p>
            <span>Character: {each.character}</span>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="page-numbers">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={currentPage === page + 1 ? "active" : ""}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cast;



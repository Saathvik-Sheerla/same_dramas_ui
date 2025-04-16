import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch, onMore }) => {
  const [movieInput, setMovieInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (movieInput.trim() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        await onSearch(movieInput);
        setMovieInput("");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={movieInput}
            onChange={(e) => setMovieInput(e.target.value)}
            placeholder="Search for movies..."
            className="search-input"
            aria-label="Search movies"
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={isSubmitting || !movieInput.trim()}
          >
            {isSubmitting ? "Searching..." : "Search"}
          </button>
        </div>
      </form>
      <button 
        className="more-button"
        onClick={onMore}
        disabled={isSubmitting}
        aria-label="Load more movies"
      >
        More Movies
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onMore: PropTypes.func.isRequired,
};

export default SearchBar;

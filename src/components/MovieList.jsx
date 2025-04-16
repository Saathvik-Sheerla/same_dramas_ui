import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="alert alert-info text-center" role="alert">
        <p className="mb-0">No movies found. Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {movies.map((movie, index) => (
        <div key={movie.id || index} className="col">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;

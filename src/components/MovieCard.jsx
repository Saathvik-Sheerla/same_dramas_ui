import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.img ? (
          <img src={movie.img} alt={movie.title} />
        ) : (
          <div className="image-not-available">
            <span>No Image Available</span>
          </div>
        )}
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          {movie.year && <span className="movie-year">{movie.year}</span>}
          {movie.genre && <span className="movie-genre">{movie.genre}</span>}
        </div>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

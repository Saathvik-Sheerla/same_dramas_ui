import axios from "axios";

// Update this to match your actual backend URL
const API_BASE = process.env.REACT_APP_SERVER_URL;

/**
 * Fetch home page movie recommendations
 * @returns {Promise} Axios response with initial movies
 */
export const fetchHome = () => axios.get(`${API_BASE}/home`);

/**
 * Fetch more movies
 * @returns {Promise} Axios response with additional movies
 */
export const fetchMoreMovies = () => axios.post(`${API_BASE}/moremovies`);

/**
 * Search for a movie and get recommendations
 * @param {string} moviename - Movie name to search for
 * @returns {Promise} Axios response with search results and recommendations
 */
export const searchMovie = (moviename) =>
  axios.post(`${API_BASE}/movie`, { moviename });
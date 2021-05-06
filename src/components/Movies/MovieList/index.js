import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../Movie';
import Col from 'react-bootstrap/Col';
import './movieList.css'

function MovieList() {
  const searchedMovies = useSelector((state) => state.movies.searchedMovies);
  const searchedTitle = useSelector((state) => state.movies.searchedTitle)
  return (
    <Col xs={11} md={6} className="d-flex flex-wrap movie-list">
          <h2 className="search-header small-screen-header">
            Search Results {searchedTitle ? `for "${searchedTitle}"` : ``}
          </h2>
      {searchedMovies.map((movie, i) => (
        <Movie movie={movie} key={i} />
      ))}
    </Col>
  );
}

export default MovieList;

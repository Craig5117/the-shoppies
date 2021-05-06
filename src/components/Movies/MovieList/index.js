import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../Movie';
import Col from 'react-bootstrap/Col';

function MovieList() {
    const searchedMovies = useSelector((state) => state.movies.searchedMovies);
    return (
        <Col xs={11} md={6} className="d-flex flex-wrap">
            {searchedMovies.map((movie, i) => (
                <Movie
                    movie={movie}
                    key={i}
                />
            ))}
        </Col>
    );
}

export default MovieList;
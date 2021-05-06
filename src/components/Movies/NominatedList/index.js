import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './nominatedList.css';

function NominatedList() {
  const nominatedMovies = useSelector((state) => state.movies.nominatedMovies);
  const dispatch = useDispatch();
  function handleDelete(title) {
    dispatch({
      type: 'movies/REMOVE_NOMINATED_MOVIE',
      payload: title,
    });
  }
  useEffect(() => {
    if (nominatedMovies.length) {
      localStorage.setItem('nominations', JSON.stringify(nominatedMovies));
    }
  }, [nominatedMovies]);
  return (
    <Col xs={11} md={6}>
    <h2 className="small-screen-header">Your Nominations</h2>
      <ul>
        {nominatedMovies.map((movie, i) => (
          <li key={i} className="mb-3">
            <Button
              onClick={() => handleDelete(movie.title)}
              className="px-1 py-0 mx-1 btn btn-danger"
            >
              X
            </Button>
            <Image
              src={movie.poster}
              thumbnail
              className="align-top mx-2 p-0 nominated-image"
            ></Image>
            {movie.title}
          </li>
        ))}
      </ul>
    </Col>
  );
}

export default NominatedList;

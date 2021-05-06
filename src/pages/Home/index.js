import React from 'react';
import MovieList from '../../components/Movies/MovieList';
import NominatedList from '../../components/Movies/NominatedList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';
import { useSelector } from 'react-redux';

function Home() {
    const nominatedMovies = useSelector((state) => state.movies.nominatedMovies);
    const searchedTitle = useSelector((state) => state.movies.searchedTitle);
  return (
    <div>
      <Row className="list-headers mt-3 mx-0">
        <Col md={6}>
          <h2 className="mx-5 search-header">Search Results {searchedTitle ? `for "${searchedTitle}"`: ``}</h2>
        </Col>
        <Col md={6}>
          <h2 className="mx-5">Your Nominations</h2>
        </Col>
      </Row>
      <div className="banner-container mt-2">
          {nominatedMovies.length === 5 ?
          <p className="text-center banner h-100 py-2">
          Fantastic! You have made 5 nominations.
        </p>
        : <p className="text-center">Search for movies and select up to 5 of your favorites for nomination to win a Shoppy award</p>
        }
      </div>
      <Row className="mt-3 mx-3">
        <MovieList></MovieList>
        <NominatedList></NominatedList>
      </Row>
    </div>
  );
}

export default Home;

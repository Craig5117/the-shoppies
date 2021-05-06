import React from 'react';
import MovieList from '../../components/Movies/MovieList';
import NominatedList from '../../components/Movies/NominatedList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <h2>Search Results</h2>
        </Col>
        <Col>
          <h2>Your Nominations</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <MovieList></MovieList>
        <NominatedList></NominatedList>
      </Row>
    </div>
  );
}

export default Home;

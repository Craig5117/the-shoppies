import React from "react";
import MovieList from "../../components/Movies/MovieList";
import NominatedList from "../../components/Movies/NominatedList";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <div>
      <Row>
          <h2>Search Results</h2>
      </Row>
      <Row>
        <MovieList></MovieList>
        <NominatedList></NominatedList>
      </Row>
    </div>
  );
}

export default Home;

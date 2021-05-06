import React from 'react';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './nominatedList.css';

function NominatedList () {
    const nominatedMovies = useSelector((state) => state.movies.nominatedMovies);
    return(
        <Col xs={11} md={6}>
            <h2>Your Nominations</h2>
            <ul>
            {nominatedMovies.map((movie, i) => (
                <li key={i} className="mb-3"><Button className="px-1 py-0 mx-1 btn btn-danger">X</Button><Image src={movie.poster} thumbnail className="align-top mx-2 p-0 nominated-image"></Image>{movie.title}</li>
            ))}
            </ul>
        </Col>
    );
}

export default NominatedList;
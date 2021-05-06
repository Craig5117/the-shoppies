import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import './movie.css';


function Movie(props) {
    const { movie } = props;
    const dispatch = useDispatch();
    const nominatedMovies = useSelector((state) => state.movies.nominatedMovies);
    function handleNominate (movie) {
        if(nominatedMovies.length !== 5) {
            dispatch({
                type: 'movies/UPDATE_NOMINATED_MOVIES',
                payload: movie,
            });
        } else {
            alert('You have already nominated 5 movies. Remove a movie from your nominations list before adding another.')
        }   
    }
    useEffect(() => {
        if(nominatedMovies.length) {
            localStorage.setItem('nominations', JSON.stringify(nominatedMovies));
        }
    }, [nominatedMovies])

    return (
        <Col md={6} lg={3} className="p-1">
            <Card>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title className="movie-card-title">{movie.title}</Card.Title>
                    <Card.Text>{movie.year}</Card.Text>
                    <Button
                        disabled={nominatedMovies?.some((nomMovie) => nomMovie.title === movie.title)}
                        className='btn-block btn-info'
                        onClick={() => handleNominate(movie)}>Nominate
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Movie;
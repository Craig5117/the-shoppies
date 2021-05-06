import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { searchOMDB } from '../../utils/API';

function NavBar() {
    const [searchedMovies, setSearchedMovies] = useState([]);
    useEffect(() => {
        if (searchedMovies.length) {
            console.log(searchedMovies);
        }
    }, [searchedMovies])
    async function handleSearch(event) {
            event.preventDefault();
            const searchedTitle = event.target.querySelector('#search-bar').value.trim();
            if (!searchedTitle) {
                return false;
            } 
            try {
               const response = await searchOMDB(searchedTitle);
               if (!response.ok) {
                   throw new Error('something went wrong!');
               }
               const responseData = await response.json();
               const movies = responseData.Search.filter(items => items.Type === 'movie');
               const movieData = movies.map((movie) => ({
                  title: movie.Title,
                  year: movie.Year,
                  poster: movie.Poster
               }))
               setSearchedMovies(movieData);
            } catch (err) {
                console.error(err);
            }
            }
    return (
        <Form inline onSubmit={handleSearch}>
            <Button className="button" type="submit"><i className="fas fa-search"></i></Button>
            <FormControl type="text" placeholder="Search" className="w-auto d-inline align-middle" id="search-bar"/>
        </Form>
    )
}

export default NavBar;
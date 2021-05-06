import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { searchOMDB } from '../../utils/API';
import { useDispatch } from 'react-redux';

function SearchBar() {
  const dispatch = useDispatch();
  async function handleSearch(event) {
    event.preventDefault();
    const searchedTitle = event.target
      .querySelector('#search-bar')
      .value.trim();
    if (!searchedTitle) {
      return false;
    }
    try {
      const response = await searchOMDB(searchedTitle);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const responseData = await response.json();
      const movies = responseData.Search.filter(
        (items) => items.Type === 'movie'
      );
      const movieData = movies.map((movie) => ({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }));
      dispatch({
        type: 'movies/UPDATE_SEARCHED_TITLE',
        payload: searchedTitle,
      });
      dispatch({
        type: 'movies/UPDATE_SEARCHED_MOVIES',
        payload: movieData,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Form inline onSubmit={handleSearch} className="mx-3 mt-3">
      <Button className="button btn-general" type="submit" aria-label="search">
        <i className="fas fa-search"></i>
      </Button>
      <FormControl
        type="text"
        placeholder="Search"
        className="w-auto d-inline align-middle mx-3"
        id="search-bar"
      />
    </Form>
  );
}

export default SearchBar;

const initialState = {
    searchedMovies: [],
    nominatedMovies: []
}

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'movies/UPDATE_SEARCHED_MOVIES': {
            return {
                ...state,
                searchedMovies: [...action.payload]
            }
        }
        case 'movies/UPDATE_NOMINATED_MOVIES': {
            return {
                ...state,
                nominatedMovies: [...state.nominatedMovies, action.payload]
            }
        }
        case 'movies/REMOVE_NOMINATED_MOVIE': {
            let newNominatedList = state.nominatedMovies.filter((movie) => {
                return movie.title !== action.payload;
            })
            return {
                ...state,
                nominatedMovies: newNominatedList
            }
        }
        default:
            return state;
    }
}
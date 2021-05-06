const initialState = {
    searchedMovies: ['working'],
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
        default:
            return state;
    }
}
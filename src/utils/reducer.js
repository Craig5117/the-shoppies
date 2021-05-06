import { combineReducers } from "redux";
import moviesReducer from "../components/Movies/moviesSlice";

const rootReducer = combineReducers({
    movies: moviesReducer
})

export default rootReducer;
const initialState = {
    title: '', 
    poster: '',
    rating: null, 
    movies: []
}


const SET_MOVIE_INFO = 'SET_MOVIE_INFO'
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

export function setMovieInfo (title, poster, rating) {
    return {
        type: SET_MOVIE_INFO,
        payload: {title, poster, rating}
    }
}

export function updateMovieList (obj) {
    return {
        type: UPDATE_MOVIE_LIST,
        payload: obj
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        case UPDATE_MOVIE_LIST: 
            return {...state, movies: [...state.movies, action.payload]}
        default:
            return state
    }
}
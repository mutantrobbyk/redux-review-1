import moviesReducer from './moviesReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    moviesReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
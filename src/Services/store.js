import {createStore, combineReducers, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import pokeReducer from '../redux/Ducks'
import movieReducer from '../Reducrs/reducer'


const rootReducer= combineReducers({
    pokemones: pokeReducer,
    movies : movieReducer


})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default function generate(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}

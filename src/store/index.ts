import { createStore, combineReducers,applyMiddleware} from 'redux'
import clubesReducer from './module/clubes';
const rootReducer = combineReducers({
    clubes: clubesReducer
})
const store = createStore(rootReducer,applyMiddleware())

export default store
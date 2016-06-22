import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import ActorsReducer from '../reducers/ActorsReducer'


// Combine Reducers
var reducers = combineReducers({
    actorsReducer: ActorsReducer
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store
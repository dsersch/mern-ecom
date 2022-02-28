import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { gamesListReducer,gameDetailsReducer } from './reducers/gameReducers.js'

const reducer = combineReducers({
    gamesList: gamesListReducer,
    gameDetails: gameDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
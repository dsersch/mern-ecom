import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/authReducers.js'
import { gamesListReducer, gameDetailsReducer } from './reducers/gameReducers.js'
import { cartReducer } from './reducers/cartReducers.js'

const reducer = combineReducers({
    gamesList: gamesListReducer,
    gameDetails: gameDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
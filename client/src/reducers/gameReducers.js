export const gamesListReducer = (state = { games: [] }, action) => {
    switch (action.type) {
        case 'GAMES_LIST_REQUEST': 
            return { loading: true, games: []}
        case 'GAMES_LIST_SUCCESS':
            return { loading: false, games: action.payload }
        case 'GAMES_LIST_FAILURE':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const gameDetailsReducer = (state = { game: {} }, action) => {
    switch (action.type) {
        case 'GAME_DETAILS_REQUEST': 
            return { loading: true, game: {}}
        case 'GAME_DETAILS_SUCCESS':
            return { loading: false, game: action.payload }
        case 'GAME_DETAILS_FAILURE':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
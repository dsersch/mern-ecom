export const listGames = () => async (dispatch) => {
    try{
        dispatch({ type: 'GAMES_LIST_REQUEST' })

        const response = await fetch('/games/recent', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()

        if(data.status === 'failed') {
            dispatch({
                type: 'GAMES_LIST_FAILURE',
                payload: data,
            })
        } else {
            dispatch({
                type: 'GAMES_LIST_SUCCESS',
                payload: data,
            })
        }

    } catch (error) {
        dispatch({
            type: 'GAMES_LIST_FAILURE',
            payload: error,
        })
    }
}

export const getGameDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'GAME_DETAILS_REQUEST' })
    
        const response = await fetch(`/games/info/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()

        if (data.status === 'failed') {
            dispatch({
                type: 'GAME_DETAILS_FAILURE',
                payload: data,
            })
        } else {
            dispatch({
                type: 'GAME_DETAILS_SUCCESS',
                payload: data,
            })
        }
    } catch (error) {
        dispatch({
            type: 'GAME_DETAILS_FAILURE',
            payload: error,
        })
    }
}
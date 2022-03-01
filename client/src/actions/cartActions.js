export const addToCart = (id) => async (dispatch) => {
    const response = await fetch(`/games/${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()

    dispatch({
        type: 'CART_ADD_ITEM',
        payload: data,
    })
}
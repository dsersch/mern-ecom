export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type) {
        case 'CART_ADD_ITEM':
            const item = action.payload

            const existingItem = state.cartItems.find((el) => {
                return el.id === item.id
            })

            if (existingItem) {
                return { 
                    ...state, 
                    cartItems: [
                        ...state.cartItems
                    ]}
            } else {
                return {
                    ...state,
                    cartItems: [
                    ...state.cartItems,
                    item
                ]}
            }
        default:
            return state
    }
}
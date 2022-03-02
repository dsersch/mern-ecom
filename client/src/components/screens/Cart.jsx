import { useDispatch,useSelector } from 'react-redux'
import classes from './Cart.module.css'

import Screen from '../utility/Screen'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    let total = 0
    cartItems.forEach((el) => {
        total = total + el.price
    })

    const onRemoveHandler = (id) => {
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: id,
        })
    }

    return (
        <Screen>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((el) => {
                    return (
                    <li key={el.id} className={classes['cart-item']}>
                        <p>{el.name}</p>
                        <div className={classes['right']}>
                            <p>${el.price}</p>
                            <button className={classes['remove']}
                                onClick={() => onRemoveHandler(el.id)}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
            <div className={classes['total']}>
                <p>TOTAL: ${total}</p>
                <button className={classes['checkout']}>Checkout</button> 
            </div>
        </Screen>
    )
}

export default Cart
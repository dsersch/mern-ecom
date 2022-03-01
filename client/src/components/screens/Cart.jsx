import { useSelector } from 'react-redux'
import classes from './Cart.module.css'

import Screen from '../utility/Screen'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    let total = 0
    cartItems.forEach((el) => {
        total = total + el.price
    })

    return (
        <Screen>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((el) => {
                    return (
                    <li key={el.id} className={classes['cart-item']}>
                        <p>{el.name}</p>
                        <p>${el.price}</p>
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
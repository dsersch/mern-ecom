import classes from './Header.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const cart = useSelector(state => state.cart)
    const cartLenght = cart.cartItems.length

    return (
        <nav className={classes['nav-bar']}>
            <p>GameStore<i className='fa-solid fa-gamepad'></i></p>
            <ul className={classes['nav-link-container']}>
                <Link to='/'>
                    <li>
                        <button className={classes['nav-link']}><i className='fa-solid fa-house'></i>Home</button>
                    </li>
                </Link>
                <Link to='/cart'>
                    <li>
                        <button className={classes['nav-link']}><i className='fa-solid fa-cart-shopping'></i>Cart</button>
                        
                    </li>
                </Link>
                {cartLenght > 0 && <div className={classes['cart-count']}>{cartLenght}</div>}
                <Link to='/login'>
                    <li>
                        <button className={classes['nav-link']}><i className='fa-solid fa-user'></i>Login</button>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header;
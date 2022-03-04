import { useState } from 'react'
import classes from './Header.module.css'
import { useDispatch,useSelector } from 'react-redux'
import DropdownMenu from './DropdownMenu.jsx'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/authActions.js'

const Header = () => {
    const [open, setOpen] = useState(false)
    const cart = useSelector(state => state.cart)
    const cartLenght = cart.cartItems.length
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        setOpen(!open)
    }

    const logoutHandler = () => {
        toggleMenuHandler()
        dispatch(logout())
    }

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
                {userInfo ? <li>
                    <button className={classes['nav-link']} onClick={toggleMenuHandler}><i className='fa-solid fa-user'></i>{userInfo.name}</button>
                    {open && <DropdownMenu>
                            <Link to='/profile'>
                                <button className={classes['nav-link']} onClick={toggleMenuHandler}>Profile</button>
                            </Link>
                            <button className={classes['nav-link']} onClick={logoutHandler}>Logout</button>
                        </DropdownMenu>}
                </li> :
                <Link to='/login'>
                    <li>
                        <button className={classes['nav-link']}><i className='fa-solid fa-user'></i>Sign In</button>
                    </li>
                </Link>}
            </ul>
        </nav>
    )
}

export default Header;
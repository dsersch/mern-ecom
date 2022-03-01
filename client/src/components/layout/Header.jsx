import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
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
                    <li><button className={classes['nav-link']}><i className='fa-solid fa-cart-shopping'></i>Cart</button></li>
                </Link>
                <Link to='/login'>
                    <li><button className={classes['nav-link']}><i className='fa-solid fa-user'></i>Login</button></li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header;
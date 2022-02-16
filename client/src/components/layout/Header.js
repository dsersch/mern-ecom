import classes from './Header.module.css' 

const Header = () => {
    return (
        <nav className={classes['nav-bar']}>
            <p><i className='fa-solid fa-gamepad'></i>GameStore</p>
            <ul className={classes['nav-link-container']}>
                <li><a href='#' className={classes['nav-link']}><i className='fa-solid fa-house'></i>Home</a></li>
                <li><a href='#' className={classes['nav-link']}><i className='fa-solid fa-cart-shopping'></i>Cart</a></li>
                <li><a href='#' className={classes['nav-link']}><i className='fa-solid fa-user'></i>Login</a></li>
            </ul>
        </nav>
    )
}

export default Header;
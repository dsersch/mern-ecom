import classes from './Header.module.css' 

const Header = () => {
    return (
        <nav className={classes['nav-bar']}>
            <p>GameStore<i className='fa-solid fa-gamepad'></i></p>
            <ul className={classes['nav-link-container']}>
                <li><button className={classes['nav-link']}><i className='fa-solid fa-house'></i>Home</button></li>
                <li><button className={classes['nav-link']}><i className='fa-solid fa-cart-shopping'></i>Cart</button></li>
                <li><button className={classes['nav-link']}><i className='fa-solid fa-user'></i>Login</button></li>
            </ul>
        </nav>
    )
}

export default Header;
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes['footer']}>
            <div>
                <p className={classes['logo']}>GameStore<i className='fa-solid fa-gamepad'></i></p>
                <p>This is a test store front to work on e-commerce using the MERN stack!</p>
            </div>
            <div className={classes['social-links-container']}>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-reddit-alien"></i>
            </div>
        </footer>
    )
}

export default Footer
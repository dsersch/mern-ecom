import classes from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
    return (
        <i className={`fa-solid fa-gamepad ${classes['loading']}`}></i>
    )
}

export default LoadingSpinner
import classes from './ErrorMessage.module.css'

const ErrorMessage = (props) => {
    return (
        <div className={classes['error-message']}>
            <div className={classes['error-heading']}>
                <p>AN ERROR HAS OCCURED</p>
            </div>
            <div className={classes['error-body']}>
                <p>{props.errorMessage}</p>
            </div>
        </div>
    )
}

export default ErrorMessage
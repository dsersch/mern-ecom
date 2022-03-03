import classes from './Login.module.css'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/authActions.js'
import Screen from '../utility/Screen'

const Login = () => {
    const dispatch = useDispatch()

    const onLoginHandler = () => {
        dispatch(login('test@mail.com', 'password'))
    }


    return (
        <Screen>
            <h1 className={classes['login']}>Login</h1>
            <button onClick={onLoginHandler}>login</button>
        </Screen>
    )
}

export default Login
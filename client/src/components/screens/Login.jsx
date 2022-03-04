import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/authActions.js'
import Screen from '../utility/Screen'
import ErrorMessage from '../utility/ErrorMessage'
import LoadingSpinner from '../utility/LoadingSpinner'

const Login = () => {
    console.log()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate('/profile')
        }
    }, [navigate, userInfo])

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onLoginHandler = (event) => {
        event.preventDefault()
        dispatch(login(email, password))
    }


    return (
        <Screen>
            <main className={classes['login-form']}>
                <h1 className={classes['form-title']}>Sign In</h1>
                {error && <ErrorMessage errorMessage={error.message} />}
                {loading && <LoadingSpinner />}
                <form className={classes['form']} onSubmit={onLoginHandler}>
                    <div className={classes['form-control']}>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' value={email} onChange={onEmailChangeHandler} />
                    </div>
                    <div className={classes['form-control']}>
                        <label htmlFor='password'>Password</label>
                        <input type="password" value={password} onChange={onPasswordChangeHandler} />
                    </div>
                    <button className={classes['login-button']} type='submit'>Sign In</button>
                </form>
            </main>
        </Screen>
    )
}

export default Login
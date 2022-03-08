import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/authActions.js'
import Screen from '../utility/Screen'
import ErrorMessage from '../utility/ErrorMessage'
import LoadingSpinner from '../utility/LoadingSpinner'

const Register = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ message, setMessage ] = useState(null)

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const userLogin = useSelector(state => state.userLogin)
    const { loggedInUser } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (loggedInUser) {
            navigate('/profile')
        }
    }, [navigate, loggedInUser])

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onConfirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const onRegisterHandler = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match...')
        } else {
            dispatch(register(name, email, password))
        }
    }


    return (
        <Screen>
            <main className={classes['login-form']}>
                <h1 className={classes['form-title']}>Sign Up</h1>
                {message && <ErrorMessage errorMessage={message} />}
                {error && <ErrorMessage errorMessage={error.message} />}
                {loading && <LoadingSpinner />}
                <form className={classes['form']} onSubmit={onRegisterHandler}>
                    <div className={classes['form-control']}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' value={name} onChange={onNameChangeHandler} />
                    </div>
                    <div className={classes['form-control']}>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' value={email} onChange={onEmailChangeHandler} />
                    </div>
                    <div className={classes['form-control']}>
                        <label htmlFor='password'>Password</label>
                        <input type="password" value={password} onChange={onPasswordChangeHandler} />
                    </div>
                    <div className={classes['form-control']}>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={onConfirmPasswordChangeHandler} />
                    </div>
                    <button className={classes['login-button']} type='submit'>Sign In</button>
                </form>
                <p>Already have an account? <Link to='/login'>Sign In</Link></p>
            </main>
        </Screen>
    )
}

export default Register
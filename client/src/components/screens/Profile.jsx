import classes from './Form.module.css'
import Screen from '../utility/Screen'
import ErrorMessage from '../utility/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, getUserDetails, updateUserProfile } from '../../actions/authActions.js'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../utility/LoadingSpinner'

const Profile = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('') 
    const [ password, setPassword ] = useState('') 
    const [ confirmPassword, setConfirmPassword ] = useState('') 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user) {
                dispatch(getUserDetails(userInfo.token))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [navigate, dispatch, userInfo, user])

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

    const onUpdateHandler = (event) => {
        event.preventDefault()
        console.log('submitted...')
    }

    const onLogoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Screen>
            {
            loading ? <LoadingSpinner />
                : error ? <ErrorMessage errorMessage={user.message} />
                : <main className={classes['standard-form']}>
                    <form className={classes['form']} onSubmit={onUpdateHandler}>
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
                    <button className={classes['form-button']} type='submit'>Update Info</button>
                </form>
                    <button className={classes['form-button']} onClick={onLogoutHandler}>Log Out</button>
                </main>
            }
        </Screen>
    )
}

export default Profile
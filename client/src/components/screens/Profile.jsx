import classes from './Profile.module.css'
import Screen from '../utility/Screen'
import ErrorMessage from '../utility/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/authActions.js'
import { useEffect } from 'react'

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    }, [navigate, userInfo])

    const onLogoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Screen>
            {!userInfo ? <ErrorMessage errorMessage='No Logged In User...' />
            : <main>
                <h1 className={classes['profile']}>{userInfo.name}</h1>
                <button className={classes['logout-button']} onClick={onLogoutHandler}>Log Out</button>
            </main>}
            
        </Screen>
    )
}

export default Profile
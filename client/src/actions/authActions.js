export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })

        const response = await fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const result = await response.json()

        if (result.status === 'failed') {
            dispatch({
                type: 'USER_LOGIN_FAILURE',
                payload: result.user
            })
        } else {
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: result.user
            })

            localStorage.setItem('userInfo', JSON.stringify(result.user))
        }
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAILURE',
            payload: error,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: 'USER_LOGOUT'
    })
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })

        const response = await fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const result = await response.json()


        if (result.status === 'failed') {
            dispatch({
                type: 'USER_REGISTER_FAILURE',
                payload: result,
            })
        } else {
            dispatch({
                type: 'USER_REGISTER_SUCCESS',
                payload: result.user,
            })

            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: result.user,
            })

            localStorage.setItem('userInfo', JSON.stringify(result.user))
        }
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILURE',
            payload: error,
        })
    }
}

export const getUserDetails = (token) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_DETAILS_REQUEST'
        })

        const response = await fetch('/auth/profile', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })

        const result = await response.json()

        if (result.status === 'failed') {
            dispatch({
                type: 'USER_DETAILS_FAILURE',
                payload: result,
            })
        } else {
            dispatch({
                type: 'USER_DETAILS_SUCCESS',
                payload: result.data
            })
        }
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILURE',
            payload: error,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_UPDATE_REQUEST'
        })

        const response = await fetch('/auth/profile', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
        })

        const result = await response.json()

        if (response.status === 'failed') {
            dispatch({
                type: 'USER_UPDATE_FAILURE',
                payload: result,
            })
        } else {
            dispatch({
                type: 'USER_UPDATE_SUCCESS',
                payload: result.data
            })
        }
    } catch (error) {
        dispatch({
            type: 'USER_UPDATE_FAILURE',
            payload: error
        })
    }
}
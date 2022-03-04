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
                payload: result,
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
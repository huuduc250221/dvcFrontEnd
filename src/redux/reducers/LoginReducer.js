import axios from 'axios'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_ACTION, LOGIN_AUTHENTICATED } from '../constant/Login.Action.Constant'

export const initialState = {
    success: false
}

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}



export const loginAuthenticated = {
    type: LOGIN_AUTHENTICATED
}


const loginActionFailure = err => {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}

export const logOutAction = {
    type: LOGOUT_ACTION
}

export const loginActionMDW = user => dispatch => {
    axios.post('/api/v1/auth/login', user)
        .then(res => {
            console.log(res.data)
            dispatch(loginSuccess(res.data))
            localStorage.setItem('isLogin', true)
        })
        // .then(res => {
        //     localStorage.setItem('isLogin', true)
        //     localStorage.setItem('role', res.data.data.role)
        //     return
        // })
        .catch(err => dispatch(loginActionFailure(err.message)))
}
export const logoutActionMDW = () => dispatch => {
    axios.post('/api/v1/auth/logout')
        .then(res => dispatch(logOutAction))
        .then(res => localStorage.removeItem('isLogin'))
    // .then(res => console.log(res))
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {

            }
        case LOGIN_SUCCESS:
            return {
                success: action.payload.success,
                data: action.payload.data

            }
        case LOGIN_FAILURE:
            return {
                success: false,
                err: true
            }

        case LOGIN_AUTHENTICATED:
            return {
                success: true,
                err: false
            }

        case LOGOUT_ACTION:
            return {
                success: false
            }
        default: return state
    }
}

export default loginReducer
import axios from 'axios'

import { LOGIN_REQUEST,LOGIN_FAILURE, LOGOUT_ACTION } from '../constant/Login.Action.Constant'

export const initialState = {
    success:false
}

const loginActionRequest = (user) => {
    return {
        type: LOGIN_REQUEST,
        payload: user
    }
}



const loginActionFailure = err => {
    return {
        type:LOGIN_FAILURE,
        payload:err
    }
}

const logOutAction = {
    type: LOGOUT_ACTION
}

export  const loginRequest = user => async dispatch => {
    await axios.post('/api/v1/auth/login',user)
            .then( res => dispatch(loginActionRequest(res.data)))
            .then(res => console.log(res))
            .catch( err => dispatch(loginActionFailure(err.message)))
}
export const logoutActionMDW = () => dispatch => {
    axios.get('/api/v1/auth/logout')
        .then(res => dispatch(logOutAction))
}

 const loginReducer = (state = initialState,action) =>  {
    switch(action.type) {
        case LOGIN_REQUEST :
            return {
                success:action.payload.success

            }
        case LOGIN_FAILURE :
            return {
                success:false
            }

        case LOGOUT_ACTION:
            return { }

        default : return state
    }
}

export default loginReducer
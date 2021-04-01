import axios from 'axios'

import { REGISTRATION_FAILURE, REGISTRATION_SUCCESS, REGISTRATION_REQUEST } from '../constant/Registration.Action.Constant'

const initialState = {
    loading: false,
    success: false,
    err: '',
}

const registrationRequest = {
    type: REGISTRATION_REQUEST
}
const registrationSuccess = data => ({
    type: REGISTRATION_SUCCESS,
    payload: data,
})
const registrationFailure = err => ({
    type: REGISTRATION_FAILURE,
    payload: err
})

export const registrationMDW = profile => dispatch => {
    // dispatch(registrationRequest)
    console.log(profile)
    axios.post('/api/v1/auth/register', profile)
        .then(res => dispatch(registrationSuccess(res.data)))
        .catch(err => dispatch(registrationFailure(err)))
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                success: action.payload.data.success,
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                err: 'error'
            }
        default: return state
    }
}

export default registrationReducer
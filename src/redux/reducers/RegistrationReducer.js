import axios from 'axios'

import { REGISTRATION_FAILURE, REGISTRATION_SUCCESS, REGISTRATION_REQUEST } from '../constant/Registration.Action.Constant'

const initialState = {
    loading: false,
    success: false,
    err : '',
}

const registrationRequest = {
    type: REGISTRATION_REQUEST
}
const registrationSuccess = {
    type:REGISTRATION_SUCCESS ,
    payload: false,
}
const registrationFailure = err => ({
    type:REGISTRATION_FAILURE,
    payload:err
})

export const registrationMDW = profile => async dispatch => {
    dispatch(registrationRequest)
    console.log(profile)
    await axios.post('/api/v1/auth/register',profile)
            .then(dispatch(registrationSuccess))
            .catch(err => dispatch(err.message))
}

const registrationReducer = (state = initialState,action) => {
    switch(action.type) {
        case REGISTRATION_REQUEST :
            return {...state,
            loading:true}
        case REGISTRATION_SUCCESS :
            return {
                ...state,
                success:true,
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                err:action.payload
            }
        default : return state
    }
}

export default registrationReducer
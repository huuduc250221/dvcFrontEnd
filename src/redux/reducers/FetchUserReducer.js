import axios from 'axios'
import { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../constant/User.Constant'


const initialState = {
    loading:false,
    profile: {},
    fetchSuccess: false,
    updateSuccess:false,
    fetchErr: '',
    updateErr:''

}

const updateUserRequest = {
    type: UPDATE_USER_REQUEST
}
const updateUserSuccess = data => ({
    type: UPDATE_USER_SUCCESS,
    payload: data,
})
const updateUserFailure = err => ({
    type: UPDATE_USER_FAILURE,
    payload: err
})

const fetchUserAction = user => ({
    type: 'FETCH_USER',
    payload: user
})

const fetchUserFailure = err => ({
    type: 'FETCH_USER_FAILURE',
    err: err,
})

export const fetchUser = () => dispatch => {
    axios.post('/api/v1/auth/me')
        .then(res => dispatch(fetchUserAction(res.data)))
        .then(res => console.log(res))
        .catch(err => dispatch(fetchUserFailure(err)))
}
export const updateUserAction = detail => dispatch => {
    dispatch(updateUserRequest)
    axios.put(`/api/v1/auth/updatedetails/${detail.id}`, detail)
        .then(res => dispatch(updateUserSuccess(res.data)))
        .catch(err => dispatch(updateUserFailure(err)))
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                profile: action.payload.data,
                fetchSuccess: action.payload.success,
            }
        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                fetchSuccess: false,
                err: action.payload,
            }
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,

            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                profile:action.payload.data,
                updateSuccess: true,
                updateErr: ''
            }
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                updateSuccess: false,
                updateErr: action.payload
            }
        default: return state
    }
}

export default usersReducer
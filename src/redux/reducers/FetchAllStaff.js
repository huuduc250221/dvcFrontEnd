
import axios from 'axios'
import { FETCH_ALL_STAFF_REQUEST, FETCH_ALL_STAFF_SUCCESS, FETCH_ALL_STAFF_FAILURE } from '../constant/FetchAllStaff.Constant'

const initialState = {
    loading: false,
    data: {},
    err: ''
}

const fetchAllStaffRequest = {
    type: FETCH_ALL_STAFF_REQUEST
}

const fetchAllStaffSuccess = data => ({
    type: FETCH_ALL_STAFF_SUCCESS,
    payload: data
})

const fetchAllStaffFailure = err => ({
    type:FETCH_ALL_STAFF_FAILURE,
    payload:err
})

const fetchAllStaffActionMDW = param => dispatch => {
    dispatch(fetchAllStaffRequest()) 
    let baseUrl = '/api/v1/auth/allstaff'

    axios.get(baseUrl)
        .then(res => dispatch(fetchAllStaffSuccess(res)))
        .catch(err => dispatch(fetchAllStaffFailure(err)))
}

const fetchAllStaffReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_ALL_STAFF_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_ALL_STAFF_SUCCESS:
            return {
                ...state,
                data:action.payload,
                loading:false,
                err:''
            }
        case FETCH_ALL_STAFF_FAILURE:
            return {
                ...state,
                loading:false,
                data:'',
                err:action.payload
            }
        default : 
            return state
    }
}

export default fetchAllStaffReducer
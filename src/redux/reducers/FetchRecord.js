
import axios from 'axios'
import { FETCH_RECORD_REQUEST, FETCH_RECORD_SUCCESS, FETCH_RECORD_FAILURE } from '../constant/FetchRecord.Constant'

const initialState = {
    loading: false,
    record: {},
    err: ''
}

const fetchRecordRequest = {
    type: FETCH_RECORD_REQUEST
}

const fetchRecordSuccess = filter => ({
    type: FETCH_RECORD_SUCCESS,
    payload: filter
})

const fetchRecordFailure = err => ({
    type:FETCH_RECORD_FAILURE,
    payload:err
})

const fetchRecordActionMDW = param => dispatch => {
    dispatch(fetchRecordRequest()) 
    let baseUrl = '/api/v1/auth/record'

    axios.get(baseUrl)
        .then(res => dispatch(fetchRecordSuccess(res)))
        .catch(err => dispatch(fetchRecordFailure(err)))
}

const fetchRecordReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_RECORD_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_RECORD_SUCCESS:
            return {
                ...state,
                record:action.payload,
                loading:false,
                err:''
            }
        case FETCH_RECORD_FAILURE:
            return {
                ...state,
                loading:false,
                record:'',
                err:action.payload
            }
        default : 
            return state
    }
}

export default fetchRecordReducer